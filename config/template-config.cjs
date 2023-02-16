/* eslint-disable */
const TEMPLATE_CONFIG = [
  {
    id: '0001',
    title: '亲爱的, 早上好',
    desc: `
      **{{date.DATA}}**
      
      今日提示：{{holidaytts.DATA}}
      
      ---
      
      城市：{{city.DATA}}
      
      天气：{{weather.DATA}}
      
      气温(最高/最低):{{max_temperature.DATA}} / {{min_temperature.DATA}}
      
      湿度: {{shidu.DATA}}
      
      PM2.5: {{pm25.DATA}}
      
      风向: {{wind_direction.DATA}}
      
      风级: {{wind_scale.DATA}}
      
      今天是我们相识的第{{love_day.DATA}}天
      
      距离你的生日还有{birthday_message.DATA}天
      
      {{moment_copyrighting.DATA}}
      
      {{poetry_title.DATA}} {{poetry_content.DATA}}
      
      ---
      
      {{comprehensive_horoscope.DATA}}      

    `
  },
  {
    id: '0002',
    title: '推送完成提醒',
    desc: `
      服务器信息：{{post_time_zone.DATA}} {{post_time.DATA}}
      
      ---
      
       {{birthday_message.DATA}}
      
      共推送 {{need_post_num.DATA}} 人
      
      成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
      
      成功用户: {{success_post_ids.DATA}}
      
      失败用户: {{fail_post_ids.DATA}}
    `
  },
]

module.exports = TEMPLATE_CONFIG
