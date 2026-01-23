# AWS Lambda@Edge Deployment Guide

This project is configured to deploy to AWS Lambda@Edge using SST (Serverless Stack) via GitHub Actions.

## Architecture

- **Lambda@Edge**: Handles server-side rendering and API routes
- **CloudFront**: Global CDN for fast content delivery
- **S3**: Stores static assets (images, CSS, JS)
- **Route 53** (optional): Custom domain management

## Cost Estimate

**Low traffic** (10k visitors/month): ~$5-10/month
**Medium traffic** (100k visitors/month): ~$40-60/month

---

## Prerequisites

1. **AWS Account** with administrative access
2. **GitHub repository** with this code
3. **AWS CLI** installed locally (for initial setup)

---

## Setup Instructions

### Step 1: Install Dependencies Locally

```bash
npm install
```

This will install SST and all required dependencies.

### Step 2: Configure AWS Credentials

You have two options for GitHub Actions authentication:

#### Option A: Using Access Keys (Simpler)

1. Create an IAM user in AWS Console:
   - Go to IAM → Users → Create User
   - Name: `github-actions-candycoat`
   - Attach policies:
     - `AdministratorAccess` (or create a more restrictive policy)

2. Create access keys:
   - Select the user → Security credentials → Create access key
   - Choose "Application running outside AWS"
   - Save the Access Key ID and Secret Access Key

3. Add to GitHub Secrets:
   - Go to your repo → Settings → Secrets and variables → Actions
   - Add secrets:
     - `AWS_ACCESS_KEY_ID`: Your access key ID
     - `AWS_SECRET_ACCESS_KEY`: Your secret access key

4. Update `.github/workflows/deploy.yml`:
   ```yaml
   # Comment out the OIDC lines:
   # role-to-assume: ${{ secrets.AWS_ROLE_ARN }}

   # Uncomment the access key lines:
   aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
   aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
   ```

#### Option B: Using OIDC (More Secure, Recommended)

Follow AWS's guide to set up GitHub OIDC:
https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-amazon-web-services

Then add `AWS_ROLE_ARN` to your GitHub secrets.

### Step 3: Add Environment Variables (Optional)

Add any environment variables to GitHub Secrets:
- `NEXT_PUBLIC_APP_URL`: Your production URL (e.g., https://candycoat.co)

### Step 4: Deploy Manually (First Time)

Before pushing to GitHub, do a manual deployment to bootstrap AWS resources:

```bash
# Make sure AWS CLI is configured
aws configure

# Deploy to production
npm run deploy:prod
```

This will create:
- CloudFormation stack
- Lambda functions
- CloudFront distribution
- S3 buckets

You'll see output like:
```
✔  Deployed:
   CandycootStack
   SiteUrl: https://d1234567890.cloudfront.net
```

**Save this URL** - this is your production site!

### Step 5: Enable GitHub Actions

1. Push your code to the `main` branch
2. GitHub Actions will automatically deploy on every push
3. View progress: GitHub repo → Actions tab

---

## Manual Deployment Commands

```bash
# Deploy to production
npm run deploy:prod

# Deploy to development/staging
npm run deploy

# Remove all AWS resources
npm run remove

# Open SST console (view logs, resources)
npm run console

# Run dev server with SST bindings
npm run dev
```

---

## Custom Domain Setup

### Step 1: Request SSL Certificate

```bash
# Must be in us-east-1 for CloudFront
aws acm request-certificate \
  --domain-name candycoat.co \
  --subject-alternative-names www.candycoat.co \
  --validation-method DNS \
  --region us-east-1
```

### Step 2: Validate Certificate

1. Go to AWS ACM Console
2. Copy the CNAME records
3. Add them to your domain DNS (Route 53, Cloudflare, etc.)
4. Wait for validation (5-30 minutes)

### Step 3: Update sst.config.ts

```typescript
const site = new NextjsSite(stack, "site", {
  customDomain: {
    domainName: "candycoat.co",
    domainAlias: "www.candycoat.co",
    // If using Route 53 in the same account:
    hostedZone: "candycoat.co",
    // If using external DNS, SST will output nameservers
  },
  // ... rest of config
});
```

### Step 4: Redeploy

```bash
npm run deploy:prod
```

SST will output DNS records to add to your domain registrar.

---

## Monitoring & Debugging

### View Logs

```bash
# Open SST Console
npm run console
```

Or in AWS Console:
- CloudWatch → Log Groups → `/aws/lambda/...`

### View Deployment

- CloudFormation → Stacks → `candycoat-production-*`
- CloudFront → Distributions
- Lambda → Functions

### Invalidate CloudFront Cache

```bash
aws cloudfront create-invalidation \
  --distribution-id YOUR_DISTRIBUTION_ID \
  --paths "/*"
```

Or add to GitHub Actions workflow after deployment.

---

## Troubleshooting

### Deployment fails with "No AWS credentials"
- Check GitHub Secrets are set correctly
- Verify IAM permissions

### Site shows old content
- CloudFront caching - wait 5-10 minutes or invalidate cache

### Lambda errors
- Check CloudWatch logs via SST Console
- Increase Lambda memory/timeout in sst.config.ts

### "Module not found" errors
- Ensure all dependencies are in `dependencies`, not `devDependencies`
- Check `package-lock.json` is committed

---

## Cost Optimization Tips

1. **Enable CloudFront caching**:
   ```typescript
   cdk: {
     distribution: {
       defaultBehavior: {
         cachePolicyId: "658327ea-f89d-4fab-a63d-7e88639e58f6", // CachingOptimized
       },
     },
   }
   ```

2. **Use smaller Lambda memory** (128MB is often enough):
   ```typescript
   defaults: {
     function: {
       memorySize: 128,
     },
   }
   ```

3. **Monitor AWS Cost Explorer** for unexpected charges

---

## Rollback

To rollback to a previous version:

```bash
# Find previous deployment
git log --oneline

# Checkout that commit
git checkout <commit-hash>

# Redeploy
npm run deploy:prod

# Or revert on main branch
git revert <bad-commit>
git push origin main
```

---

## Support

- **SST Docs**: https://docs.sst.dev
- **SST Discord**: https://discord.gg/sst
- **AWS Support**: Check CloudWatch logs and CloudFormation events

---

## Architecture Diagram

```
GitHub Push
    ↓
GitHub Actions
    ↓
SST Deploy
    ↓
    ├─→ Lambda@Edge (SSR, API routes)
    ├─→ CloudFront (CDN)
    ├─→ S3 (Static assets)
    └─→ Route 53 (Optional: Custom domain)
        ↓
    Users worldwide 🌍
```

---

## Next Steps

1. ✅ Complete AWS setup
2. ✅ Push to main branch
3. ✅ Verify deployment in GitHub Actions
4. ⬜ Set up custom domain
5. ⬜ Configure monitoring/alerts
6. ⬜ Set up staging environment (optional)
