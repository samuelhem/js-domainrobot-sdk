let DomainRobotService = require("./DomainRobotService");

class Contact extends DomainRobotService {
  constructor(contactModel, domainRobotConfig) {
    super(domainRobotConfig);
    this.model = contactModel;
  }

  async create() {
    return await this.sendPostRequest(
        this.domainRobotConfig.url + "/contact",
        this.model
    );
  }

  async update(id) {
    return await this.sendPutRequest(
        this.domainRobotConfig.url + "/contact/" + id,
        this.model
    );
  }

  async delete(id) {
    return await this.sendDeleteRequest(
        this.domainRobotConfig.url + "/contact/" + id
    );
  }

  async info(id) {
    return await this.sendGetRequest(
        this.domainRobotConfig.url + "/contact/" + id
    );
  }

  async list(keys = []) {
    let keysString = keys.join('&keys=');

    return await this.sendPostRequest(
         this.domainRobotConfig.url + "/contact/_search?keys=" + keysString,
         this.model
    );
  }

  

}

module.exports = Contact;
