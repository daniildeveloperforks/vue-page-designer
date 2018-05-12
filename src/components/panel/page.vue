<template>
	<div class="panel-wrap" v-if="activeElement.page && tab === 1">
    <div class="panel-row" flex>
      <icon name="type" />
      <div class="panel-label">{{$t('messages.page.name')}}</div>
      <div class="panel-value">
        <input type="text" v-model="activeElement.title">
      </div>
    </div>

    <div class="panel-row" flex>
      <icon name="smartphone" />
      <div class="panel-label">{{$t('messages.page.height')}}</div>
      <div class="panel-value">
        <input type="text" v-model="activeElement.height">
      </div>
    </div>

    <div class="panel-row" flex>
      <icon name="droplet" />
      <div class="panel-label">{{$t('messages.page.background')}}</div>
      <div class="panel-value">
        <input type="color" v-model="activeElement.backgroundColor">
      </div>
    </div>

    <div class="panel-row" flex>
      <icon name="clock" />
      <div class="panel-label">{{$t('messages.page.endTime')}}</div>
      <div class="panel-value">
        <input type="date" v-model="activeElement.endTime">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['activeElement', 'tab']
}
</script>
