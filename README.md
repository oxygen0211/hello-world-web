# Hello world pipeline demo Projekt

* Push auf Feature branch -> CI build (tests)
* Push/Merge auf master -> CI build + deployment auf staging
* Manueller Trigger von Production Deployment build -> deployment auf production

## Technik
* GitHub repo
* GitHub actions für pipelines
* AWS Elastic container registry
* AWS Elastic container service + fargate für runtime
* AWS VPC + security groups (firewall, portfreigabe)
