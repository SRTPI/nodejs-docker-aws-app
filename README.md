
# Node.js App Deployment on AWS using Terraform and Docker

This project demonstrates deploying a simple Node.js application to an AWS EC2 instance using Docker and Terraform.

## 🔧 Technologies Used

- Node.js & Express.js
- Docker
- AWS EC2
- Terraform
- Ubuntu (on EC2 instance)

## 📁 Project Structure

```
NODEAPP1-master/
├── Dockerfile
├── index.js
├── package.json
├── test/
│   └── test.js
```

## 🚀 Project Flow

### 1. **Local Docker Build & Run**
- Build image: `docker build -t nodeapp:v1 .`
- Run container: `docker run -p 3000:3000 nodeapp:v1`
- Access app: [http://localhost:3000](http://localhost:3000)

### 2. **Terraform AWS Setup**
- Write Terraform config to provision EC2 instance in `terraform-nodeapp-deploy/`
- Example files: `main.tf`, `provider.tf`, `keypair.tf`, `securitygroup.tf`

### 3. **Terraform Commands**
```bash
terraform init
terraform plan
terraform apply
```

### 4. **SSH to EC2 & App Setup**
```bash
ssh -i "path/to/devops-key.pem" ubuntu@<ec2-public-ip>
```
- Transfer app: `scp -r NODEAPP1-master ubuntu@<ec2-public-ip>:~/`
- Install Node.js & NPM
- Run app:
```bash
cd NODEAPP1-master/NODEAPP1-master
npm install
node index.js
```

### 5. **Access App in Browser**
```bash
http://<ec2-public-ip>:3000
```

## ✅ Status

This project is successfully deployed and accessible via the browser.

## 📌 Notes

- Make sure port 3000 is allowed in the EC2 security group.
- Ensure correct permissions on `node_modules` folder if errors occur (`sudo chown -R ubuntu:ubuntu .`)
