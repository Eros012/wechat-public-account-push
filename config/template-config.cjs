/* eslint-disable */
const TEMPLATE_CONFIG = [
  {
    id: 'YhfDIeLRJCLdfTfa2ewSVVaIIABFHVtQ4rG3KNNSGQ8',
    title: 'test',
    desc: `
      **{{date.DATA}}**
      
      📆{{date.DATA}}
🏢城市：{{city.DATA}}
⛅天气：{{weather.DATA}}

☀️最高气温：{{max_temperature.DATA}}
❄️最低气温：{{min_temperature.DATA}}

🍃风向：{{wind_direction.DATA}}
🎐风级：{{wind_scale.DATA}}

🌻下一个休息日：{{wx_holidaytts_0}}.DATA}},{{wx_holidaytts_1}}.DATA}}

🪄今天是Eros云养耶耶的第{{love_day.DATA}}天♥
🐈Eros破壳日：{{wx_birthday_0.DATA}}
🦮耶耶破壳日：{{wx_birthday_1.DATA}}

请记得保持耐心，不发脾气，多喝水，多运动~☀

{{wx_note_en_{0}.DATA}}
{{wx_note_ch_{0}.DATA}}

    `
  },
  /**{
    id: '0002',
    title: '推送完成提醒',
    desc: `
      服务器信息：{{post_time_zone.DATA}} {{post_time.DATA}}
      
      ---
      
      共推送 {{need_post_num.DATA}} 人
      
      成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
      
      成功用户: {{success_post_ids.DATA}}
      
      失败用户: {{fail_post_ids.DATA}}
    `
  },*/
]

module.exports = TEMPLATE_CONFIG
