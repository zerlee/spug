/**
 * Copyright (c) OpenSpug Organization. https://github.com/openspug/spug
 * Copyright (c) <spug.dev@gmail.com>
 * Released under the AGPL-3.0 License.
 */
import { observable } from "mobx";
import http from 'libs/http';

class Store {
  @observable records = [];
  @observable localtion = [];
  @observable permRecords = [];
  @observable record = {};
  @observable isFetching = false;
  @observable formVisible = false;
  @observable importVisible = false;

  @observable f_name;
  @observable f_localtion

  fetchRecords = () => {
    this.isFetching = true;
    return http.get('/api/asset/idc/')
      .then((localtion) => {
        this.localtion = localtion;
        // this.permRecords = hosts.filter(item => perms.includes(item.id));
        // for (let item of hosts) {
        //   this.idMap[item.id] = item
        // }
      })
      .finally(() => this.isFetching = false)
  };

  showForm = (info = {}) => {
    this.formVisible = true;
    this.record = info
  }
}

export default new Store()
