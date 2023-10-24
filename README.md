# Personal portfolio

[![Site preview](/public/site-preview.png)](https://tancioco.com)

My design portfolio to showcase a few projects. Built with [Next.js](https://nextjs.org/), [Three.js](https://threejs.org/), and [Framer Motion](https://www.framer.com/motion/). View the [live site](https://tancioco.com) or check out a live version of the [components storybook](https://storybook.hamishw.com).

## Install & run

Make sure you have nodejs `18.0.0` or higher and npm `8.6.0` or higher installed. Install dependencies with:

```bash
npm install
```
Install [node](#install-node). Install [next](#install-next)

Once it's done start up a local server with:

```bash
npm run dev
```

To view the components storybook:

```bash
yarn storybook
or
npm run storybook
```
DOES NOT WORK ---Troubleshoot: [storybook](#troubleshoot-storybook)

To create a production build:

This will create an executable file in the folder `/build`
```bash
npm run build
```
To run image optimization
```bash
npm i sharp
```


## Deployment

I've set up the site using AWS for hosting and serverless functions. You'll need an AWS account and the AWS CLI installed in order to deploy. Before deploying, follow [this step](#install-aws-cli) to setup AWS accont, create bucket, and modify the aws name in package.json.

Deploy the site to s3:

```bash
npm run deploy
```

Install the [command line for AWS](#install-aws-cli).

Deploy serverless functions:

```bash
cd functions
```

```bash
npm run deploy:api
```

## Publishing website
Source: [AWS Website configuration](#instruction-for-publishing-website)

----------------------------------------------------------------------------------
## FAQs

<details>
  <summary>How do I change the color on the <code>DisplacementSphere</code> (blobby rotating thing in the background).</summary>
  
  You'll need to edit the fragment shader. [Check out this issue for more details](https://github.com/HamishMW/portfolio/issues/19#issuecomment-870996615).
</details>

<details>
  <summary>How do I get the contact form to work?</summary>
  
  It's set up using a serverless function with AWS Lambda. You'll need to set up an AWS account and deploy the function. [Refer to this issue for more details](https://github.com/HamishMW/portfolio/issues/21#issuecomment-958727113).
</details>



----------------------------------------------------------------------------------

## Troubleshooting
### Install node

```bash
brew install node
```

### Install next
To manually create a new Next.js app, install the required packages:
```bash
npm install next@latest react@latest react-dom@latest
```
Source: [Next Installation](https://nextjs.org/docs/getting-started/installation)

### Install Yarn
```bash
brew install yarn
```
Install Yarn dependencies for the Storybook
```bash
yarn
```
### Troubleshoot Storybook
Use the Storybook CLI to install it in a single command. Run this inside your existing project’s root directory:
```bash
npx storybook@latest init
```
storybook init is not made for empty projects.
Source: [Storybook Installation](https://storybook.js.org/docs/react/get-started/install)

Install [storybook](#install-storybook).
Troubleshoot: 
-Error: can't recognize -p
Change the `.storybook/main.js` file
-Error: Cannot find module 'next/dist/shared/lib/router-context'. The fix is updating the next version as:
`"next": "13.4.19" ` in package.json. Remove node_modules and package-lock.json then install them again using `npm install`. [Read this for other fixes](https://github.com/storybookjs/storybook/issues/24234)
-

### Install AWS CLI
```bash
brew install awscli
```
Steps before deployment:
1. Make sure to [create your AWS account](https://repost.aws/knowledge-center/create-and-activate-aws-account). Create a bucket and modify the permissions
  a. Go to S3. and click the bucket. Enable static website hosting by going to your AWS account, then `s3 > NameOfBucket > Static website hosting`. Then click `Enable` in `Static website hosting`, then specify the home or default page of the website in `Index Document`

  Source: [AWS S3 Static website hosting](https://docs.aws.amazon.com/AmazonS3/latest/userguide/website-hosting-custom-domain-walkthrough.html#root-domain-walkthrough-configure-bucket-aswebsite)

2. Install and Configure AWS CLI:

If you haven't already, you'll need to install the AWS Command Line Interface (CLI) on your local machine.
After installation, you should configure the AWS CLI by running 
```bash
aws configure
```
..and providing your AWS access key, secret key, default region, and output format. Make sure you have the necessary AWS IAM permissions to access and modify the specified S3 bucket. 


How to Retrieve Root Access Keys
1.  Go to Amazon Web Services console and click on the name of your account (it is located in the top right corner of the console). Then, in the expanded drop-down list, select Security Credentials.
2.  Click the Continue to Security Credentials button.
3.  Expand the Access Keys (Access Key ID and Secret Access Key) option. You will see the list of your active and deleted access keys.
4.  To generate new access keys, click the Create New Access Key button.
[Source: ](https://www.msp360.com/resources/blog/how-to-find-your-aws-access-key-id-and-secret-access-key/)

### Instruction for publishing website
Source:[Tutorial](https://docs.aws.amazon.com/AmazonS3/latest/userguide/website-hosting-custom-domain-walkthrough.html#root-domain-walkthrough-configure-bucket-aswebsite)  for website configuration from AWS