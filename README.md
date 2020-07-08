# Hello world pipeline demo Projekt

* Push auf Feature branch -> CI build (tests)
* Push/Merge auf master -> CI build + deployment auf staging
* GitHub release -> CI build + deployment auf production

## Technik
* GitHub repo
* GitHub actions für pipelines
* AWS Elastic container registry
* AWS Elastic container service + fargate für runtime
* AWS VPC + security groups (firewall, portfreigabe)


## Alternativen, mögliche Erweiterungen
* On-Premise VCS (GitLab, GitHub Enterprise, Gitblit,...)
* GitLab, AWS Code commit
* On-Premise oder alternative cloud CI
  * Jenkins
  * Circle CI
  * AWS code build
  * Travis CI
* Kubernetes (self-managed oder AWS EKS)
* High Load balancing
* Automatisierte Systemtests auf staging
* Canary deployments auf production
* Automatische deployments auf production
* Load Balancing
* Domain bindings
* Port port mappings
+ API gateway
