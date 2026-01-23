# Quick Start - Deploy to AWS Lambda@Edge

## ⚡ Fastest Path to Production

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure AWS (Choose One Method)

#### Method A: AWS Access Keys (Simplest)
```bash
# In AWS Console: IAM → Users → Create User → Create Access Keys
# Then add to GitHub Secrets:
# - AWS_ACCESS_KEY_ID
# - AWS_SECRET_ACCESS_KEY
```

#### Method B: Local AWS CLI
```bash
# If you have AWS CLI configured locally
aws configure
```

### 3. First Deployment (Bootstrap AWS Resources)
```bash
npm run deploy:prod
```

Expected output:
```
✔  Deployed:
   Site: https://d1234567890.cloudfront.net
```

### 4. Set Up GitHub Actions

1. Add AWS credentials to GitHub Secrets:
   - Repo → Settings → Secrets and variables → Actions
   - Add: `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY`

2. Update `.github/workflows/deploy.yml` (if using access keys):
   - Comment out line with `role-to-assume`
   - Uncomment lines with `aws-access-key-id` and `aws-secret-access-key`

3. Push to main branch:
```bash
git add .
git commit -m "Add AWS Lambda@Edge deployment"
git push origin main
```

4. Watch deployment:
   - Go to GitHub → Actions tab
   - Watch the deployment progress

### 5. Done! 🎉

Your site is now live on AWS Lambda@Edge with automatic deployments on every push to main.

---

## Cost Estimate

- **First year**: ~$5-10/month (with AWS Free Tier)
- **After free tier**: ~$40-60/month for 100k visitors

---

## Useful Commands

```bash
# Deploy to production
npm run deploy:prod

# View logs and resources
npm run console

# Remove everything from AWS
npm run remove

# Run dev server
npm run dev
```

---

## Next Steps (Optional)

- [ ] Set up custom domain (see DEPLOYMENT.md)
- [ ] Configure CloudWatch alerts
- [ ] Set up staging environment
- [ ] Add CloudFront cache invalidation to CI/CD

Full documentation: See `DEPLOYMENT.md`
