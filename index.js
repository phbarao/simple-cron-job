const CronJob = require("cron").CronJob;

const job = new CronJob(
  "*/5 * * * * *",
  () => {
    console.log("Hello");
  },
  null,
  true,
  "America/Sao_Paulo"
);
