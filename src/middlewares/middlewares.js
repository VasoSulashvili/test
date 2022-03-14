const personalInfoMiddleware = function (router, path, data) {
  //   if (data.first_name && data.last_name && data.email) {
  //     return true;
  //   } else {
  //     return router.push({ name: path });
  //   }
};

const technicalSkillsMiddleware = function (router, path, data) {
  if (data.first_name && data.last_name && data.email) {
    return true;
  } else {
    return router.push({ name: path });
  }
};

const covidMiddleware = function (router, path, data) {
  if (
    data.skills.length > 0 &&
    data.first_name &&
    data.last_name &&
    data.email
  ) {
    return true;
  } else {
    return router.push({ name: path });
  }
};

const redberrianInsightMiddleware = function (router, path, data) {
  if (
    data.skills.length > 0 &&
    data.first_name &&
    data.last_name &&
    data.email &&
    data.work_preference &&
    data.had_covid !== null &&
    data.vaccinated !== null
  ) {
    if (data.had_covid == "true" && !data.had_covid_at) {
      return router.push({ name: path });
    }
    if (data.vaccinated == "true" && !data.vaccinated_at) {
      return router.push({ name: path });
    }
    return true;
  } else {
    return router.push({ name: path });
  }
};

const submitMiddleware = function (router, path, data) {
  if (
    data.skills.length > 0 &&
    data.first_name &&
    data.last_name &&
    data.email &&
    data.work_preference &&
    data.had_covid !== null &&
    data.vaccinated !== null &&
    data.will_organize_devtalk !== null &&
    data.something_special
  ) {
    if (data.had_covid == "true" && !data.had_covid_at) {
      return router.push({ name: path });
    }
    if (data.vaccinated == "true" && !data.vaccinated_at) {
      return router.push({ name: path });
    }
    if (data.will_organize_devtalk == "true" && !data.devtalk_topic) {
      return router.push({ name: path });
    }
    return true;
  } else {
    return router.push({ name: path });
  }
};

export {
  personalInfoMiddleware,
  technicalSkillsMiddleware,
  covidMiddleware,
  redberrianInsightMiddleware,
  submitMiddleware,
};
