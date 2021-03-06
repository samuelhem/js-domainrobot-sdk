let DomainRobotService = require("./DomainRobotService");

class Domain extends DomainRobotService {
  constructor(domainModel, domainRobotConfig) {
    super(domainRobotConfig);
    this.model = domainModel;
  }

  async create() {
    return await this.sendPostRequest(
        this.domainRobotConfig.url + "/domain",
        this.model
    );
  }

  async update() {
    return await this.sendPutRequest(
        this.domainRobotConfig.url + "/domain",
        this.model
    );
  }

  async transfer() {
    return await this.sendPostRequest(
        this.domainRobotConfig.url + "/domain/_transfer",
        this.model
    );
  }

  async updateStatus(name){
    return await this.sendPutRequest(
        this.domainRobotConfig.url + "/domain/" + name + "/_statusUpdate",
        this.model
    );
  }

  async renew(name) {
    return await this.sendPutRequest(
        this.domainRobotConfig.url + "/domain/" + name + "/_renew",
        this.model
    );
  }

  async restore(name) {
    return await this.sendPostRequest(
        this.domainRobotConfig.url + "/domain/" + name + "/_restore",
        this.model
    );
  }

  async restoreList(keys = []) {
    let keysString = keys.join('&keys=');
    return await this.sendPostRequest(
        this.domainRobotConfig.url + "/domain/restore/_search?keys=" + keysString,
        this.model
    );
  }

  async info(name) {
    return await this.sendGetRequest(
        this.domainRobotConfig.url + "/domain/" + name
    );
  }

  async list(keys = []) {
    let keysString = keys.join('&keys=');
    return await this.sendPostRequest(
        this.domainRobotConfig.url + "/domain/_search?keys=" + keysString,
        this.model
    );
  }

  async authInfo1Create(name){
    return await this.sendPostRequest(
        this.domainRobotConfig.url + "/domain/" + name + "/_authinfo1"
    );
  }

  async authInfo1Delete(name){
    return await this.sendDeleteRequest(
        this.domainRobotConfig.url + "/domain/" + name + "/_authinfo1"
    );
  }

  async authInfo2Create(name){
    return await this.sendPostRequest(
        this.domainRobotConfig.url + "/domain/" + name + "/_authinfo2"
    );
  }

  async cancelationCreate(name){
    return await this.sendPostRequest(
        this.domainRobotConfig.url + "/domain/" + name + "/cancelation",
        this.model
    );
  }

  async cancelationUpdate(name){
    return await this.sendPutRequest(
        this.domainRobotConfig.url + "/domain/" + name + "/cancelation"
    );
  }

  async cancelationDelete(name){
    return await this.sendDeleteRequest(
        this.domainRobotConfig.url + "/domain/" + name + "/cancelation"
    );
  }

  async cancelationInfo(name){
    return await this.sendGetRequest(
        this.domainRobotConfig.url + "/domain/" + name + "/cancelation"
    );
  }

  async cancelationList(keys = []){
      let keysString = keys.join('&keys=');
      return await this.sendPostRequest(
          this.domainRobotConfig.url + "/domain/cancelation_search?keys=" + keysString,
          this.model
      );
  }

}

module.exports = Domain;
