<template>
  <q-scroll-area style="height: calc(100vh - 85px)">
    <div v-for="n in 1" :key="n" class="q-py-xs">
      <div class="">
        <q-page class="tw-px-10 tw-space-y-4">
          <div class="tw-flex tw-flex-col lg:tw-flex-row tw-gap-4 tw-flex-wrap">
            <div
              class="tw-bg-default-7 tw-shadow-md tw-p-8 tw-w-full lg:tw-w-1/2 tw-rounded-xl lg:tw-max-w-[774px] lg:tw-max-h-[310px]"
            >
              <div class="tw-flex tw-justify-between">
                <div
                  class="tw-py-2 tw-px-3 tw-flex tw-items-center tw-bg tw-rounded-xl ff-worksans tw-font-medium tw-gap-1"
                  :class="
                    $q.dark.isActive
                      ? 'tw-text-white tw-bg-green-500'
                      : 'tw-text-default-6 tw-bg-yellow-100/30'
                  "
                >
                  <img
                    :src="
                      $q.dark.isActive
                        ? '/assets/images/icons/calendar-db-chart-dark.svg'
                        : '/assets/images/icons/calendar-db-chart-light.svg'
                    "
                    alt=""
                  />This Month
                </div>
                <img
                  :src="
                    $q.dark.isActive
                      ? '/assets/images/icons/grafik-mini-db-chart-dark.svg'
                      : '/assets/images/icons/grafik-mini-db-chart-light.svg'
                  "
                  class="tw-p-1 tw-rounded-xl"
                  width="35px"
                  height="32px"
                  :class="
                    $q.dark.isActive ? 'tw-bg-black' : 'tw-bg-yellow-100/30'
                  "
                  alt=""
                />
              </div>
              <div
                class="tw-flex tw-flex-col lg:tw-flex-row tw-mt-4 lg:tw-mt-0 lg:tw-items-center lg:tw-justify-between tw-flex-wa tw-gap-7"
              >
                <div class="d">
                  <span class="tw-text-3xl tw-text-default-6 tw-font-bold"
                    >12345</span
                  ><br />
                  <span class="tw-text-white"
                    >Lorem Ipsum
                    <span class="tw-ml-2 tw-text-default-6 tw-font-bold"
                      >+2.45%</span
                    ></span
                  >
                  <div class="div tw-flex tw-items-center tw-gap-1 tw-mt-6">
                    <img
                      src="/assets/images/icons/centang-db-chart.svg"
                      alt=""
                    />
                    <span class="tw-text-default-6 tw-font-bold">Lorem</span>
                  </div>
                </div>
                <div id="chart-line" class="tw-flex tw-h-48 tw-w-auto"></div>
              </div>
            </div>
            <div
              class="tw-shadow-md tw-p-8 lg:tw-w-1/2 tw-rounded-xl tw-max-w-[774px] tw-max-h-[310px]"
              :class="$q.dark.isActive ? 'tw-bg-zinc-900' : 'tw-bg-white'"
            >
              <div class="tw-flex tw-flex-col tw-justify-between tw-h-full">
                <div class="tw-flex tw-justify-between">
                  <span
                    class="tw-text-3xl tw-font-bold"
                    :class="
                      $q.dark.isActive
                        ? 'tw-text-default-7 '
                        : 'tw-text-default-6 '
                    "
                    >Lorem Ipsum</span
                  >
                  <img
                    :src="
                      $q.dark.isActive
                        ? '/assets/images/icons/grafik-mini-db-chart-dark.svg'
                        : '/assets/images/icons/grafik-mini-db-chart-light.svg'
                    "
                    class="tw-p-1 tw-rounded-xl"
                    width="35px"
                    height="32px"
                    :class="
                      $q.dark.isActive ? 'tw-bg-black' : 'tw-bg-gray-300/30'
                    "
                    alt=""
                  />
                </div>
                <div>
                  <div id="chart-bar" class="tw-h-56"></div>

                  <!-- <div
              v-if="$q.dark.isActive"
              id="chart-bar-dark"
              class="tw-h-56"
            ></div>
            <div v-else id="chart-bar" class="tw-h-56"></div> -->
                </div>
              </div>
            </div>
          </div>
          <div class="tw-flex lg:tw-flex-row tw-gap-4 tw-flex-wrap">
            <div
              class="tw-shadow-md tw-p-8 lg:tw-w-1/2 tw-rounded-xl lg:tw-max-w-[774px] lg:tw-max-h-[310px]"
              :class="$q.dark.isActive ? 'tw-bg-zinc-900' : 'tw-bg-white'"
            >
              <div class="tw-flex tw-mb-6 tw-justify-between">
                <span
                  class="tw-text-3xl tw-font-bold"
                  :class="
                    $q.dark.isActive
                      ? 'tw-text-default-7 '
                      : 'tw-text-default-6 '
                  "
                  >Lorem Ipsum</span
                >
                <img
                  :src="
                    $q.dark.isActive
                      ? '/assets/images/icons/dots-db-white.svg'
                      : '/assets/images/icons/dots-db-gold.svg'
                  "
                  class="tw-p-1 tw-rounded-xl"
                  width="35px"
                  height="32px"
                  :class="
                    $q.dark.isActive ? 'tw-bg-black' : 'tw-bg-gray-300/30'
                  "
                  alt=""
                />
              </div>
              <div class="tw-flex-col tw-flex tw-gap-3">
                <div
                  class="tw-grid tw-grid-cols-4 tw-w-full tw-font-bold"
                  :class="
                    $q.dark.isActive
                      ? 'tw-text-default-7 '
                      : 'tw-text-default-6 '
                  "
                >
                  <span>lorem</span>
                  <span>Progress</span>
                  <span>Quantity</span>
                  <span>Date</span>
                </div>
                <div
                  class="tw-grid tw-grid-cols-4 tw-w-full"
                  :class="
                    $q.dark.isActive ? 'tw-text-white' : 'tw-text-default-6'
                  "
                >
                  <div
                    class=""
                    :class="
                      $q.dark.isActive ? 'checkbox-green' : 'checkbox-yellow'
                    "
                  >
                    <input type="checkbox" id="checkbox1" />
                    <label for="checkbox1">Lorem Ipsum</label>
                  </div>
                  <span>11.5%</span>
                  <span>1000</span>
                  <span>24 jan 2024</span>
                </div>
                <div
                  class="tw-grid tw-grid-cols-4 tw-w-full"
                  :class="
                    $q.dark.isActive ? 'tw-text-white' : 'tw-text-default-6'
                  "
                >
                  <div
                    class=""
                    :class="
                      $q.dark.isActive ? 'checkbox-green' : 'checkbox-yellow'
                    "
                  >
                    <input type="checkbox" id="checkbox2" />
                    <label for="checkbox2">Lorem Ipsum</label>
                  </div>
                  <span>11.5%</span>
                  <span>1000</span>
                  <span>24 jan 2024</span>
                </div>
                <div
                  class="tw-grid tw-grid-cols-4 tw-w-full"
                  :class="
                    $q.dark.isActive ? 'tw-text-white' : 'tw-text-default-6'
                  "
                >
                  <div
                    class=""
                    :class="
                      $q.dark.isActive ? 'checkbox-green' : 'checkbox-yellow'
                    "
                  >
                    <input type="checkbox" id="checkbox3" />
                    <label for="checkbox3">Lorem Ipsum</label>
                  </div>
                  <span>11.5%</span>
                  <span>1000</span>
                  <span>24 jan 2024</span>
                </div>
                <div
                  class="tw-grid tw-grid-cols-4 tw-w-full"
                  :class="
                    $q.dark.isActive ? 'tw-text-white' : 'tw-text-default-6'
                  "
                >
                  <div
                    class=""
                    :class="
                      $q.dark.isActive ? 'checkbox-green' : 'checkbox-yellow'
                    "
                  >
                    <input type="checkbox" id="checkbox4" />
                    <label for="checkbox4">Lorem Ipsum</label>
                  </div>
                  <span>11.5%</span>
                  <span>1000</span>
                  <span>24 jan 2024</span>
                </div>
                <div
                  class="tw-grid tw-grid-cols-4 tw-w-full"
                  :class="
                    $q.dark.isActive ? 'tw-text-white' : 'tw-text-default-6'
                  "
                >
                  <div
                    class=""
                    :class="
                      $q.dark.isActive ? 'checkbox-green' : 'checkbox-yellow'
                    "
                  >
                    <input type="checkbox" id="checkbox5" />
                    <label for="checkbox5">Lorem Ipsum</label>
                  </div>
                  <span>11.5%</span>
                  <span>1000</span>
                  <span>24 jan 2024</span>
                </div>
              </div>
            </div>
            <div
              class="lg:tw-w-1/2 tw-rounded-xl tw-flex lg:tw-flex-row lg:tw-flex-nowrap tw-flex-wrap tw-gap-4 tw-max-w-[774px] lg:tw-max-h-[310px]"
            >
              <div
                class="tw-shadow-md tw-p-8 lg:tw-w-1/2 tw-w-full tw-rounded-xl tw-relative"
                :class="$q.dark.isActive ? 'tw-bg-zinc-900' : 'tw-bg-white'"
              >
                <div class="tw-flex tw-justify-between">
                  <span
                    class="tw-text-default-7 tw-font-bold"
                    :class="$q.dark.isActive ? '' : ''"
                    >Lorem Ipsum</span
                  >
                  <span class="tw-text-green-500">+2.45%</span>
                </div>
                <div class="tw-flex items-center tw-gap-2">
                  <span class="tw-text-3xl tw-text-default-6 tw-font-bold"
                    >2.579</span
                  ><span class="tw-text-default-7"> lorem ipsum </span>
                </div>
                <div
                  id="chart-single"
                  class="tw-h-64 lg:tw-absolute tw-top-12 tw-w-80"
                ></div>
              </div>
              <div
                class="tw-shadow-md tw-flex tw-flex-col tw-items-center tw-justify-between tw-p-8 lg:tw-w-1/2 tw-w-full tw-rounded-xl tw-bg-default-6 tw-relative"
              >
                <div class="tw-flex tw-justify-between tw-w-full">
                  <span
                    class="tw-text-default-7 tw-font-bold"
                    :class="$q.dark.isActive ? '' : ''"
                    >Lorem Ipsum</span
                  >
                  <span class="tw-text-default-7">Monthly</span>
                </div>
                <div
                  id="chart-pie"
                  class="lg:tw-w-40 tw-w-48 lg:tw-absolute lg:tw-bottom-[-px] tw-h-48"
                ></div>
                <div
                  class="tw-w-full tw-flex tw-justify-between tw-items-center tw-rounded-xl tw-p-2 tw-bg-green-300/20 tw-px-8"
                >
                  <div
                    class="tw-text-white tw-flex tw-flex-col tw-items-center"
                  >
                    <div class="tw-flex tw-gap-2 tw-items-center">
                      <div
                        class="tw-rounded-full tw-bg-default-3 tw-p-1 tw-h-fit"
                      ></div>
                      <span class="tw-text-center tw-w-full">Your files</span>
                    </div>
                    <span class="tw-text-xl">63%</span>
                  </div>
                  <div
                    class="tw-w-[2px] tw-rounded-full tw-h-8 tw-bg-white"
                  ></div>
                  <div
                    class="tw-text-white tw-flex tw-flex-col tw-items-center"
                  >
                    <div class="tw-flex tw-gap-2 tw-items-center">
                      <div
                        class="tw-rounded-full tw-bg-green-500 tw-p-1 tw-h-fit"
                      ></div>
                      <span class="tw-text-center tw-w-full">System</span>
                    </div>
                    <span class="tw-text-xl">63%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="tw-flex lg:tw-flex-row tw-flex-wrap tw-gap-4">
            <div
              class="tw-shadow-md tw-p-8 lg:tw-w-1/2 tw-rounded-xl lg:tw-max-w-[774px] lg:tw-max-h-[310px]"
              :class="$q.dark.isActive ? 'tw-bg-zinc-900' : 'tw-bg-white'"
            >
              <div class="tw-flex tw-mb-6 tw-justify-between">
                <span
                  class="tw-text-3xl tw-font-bold"
                  :class="
                    $q.dark.isActive
                      ? 'tw-text-default-7 '
                      : 'tw-text-blue-900 '
                  "
                  >Lorem Ipsum</span
                >
                <img
                  :src="
                    $q.dark.isActive
                      ? '/assets/images/icons/dots-db-white.svg'
                      : '/assets/images/icons/dots-db-green.svg'
                  "
                  class="tw-p-1 tw-rounded-xl"
                  width="35px"
                  height="32px"
                  :class="
                    $q.dark.isActive ? 'tw-bg-black' : 'tw-bg-gray-300/30'
                  "
                  alt=""
                />
              </div>
              <div class="tw-flex-col tw-flex tw-gap-3">
                <div
                  class="tw-grid tw-grid-cols-4 tw-w-full tw-font-bold tw-border-b tw-pb-2"
                  :class="
                    $q.dark.isActive
                      ? 'tw-text-default-7 tw-border-white '
                      : 'tw-text-blue-500/30 tw-border-blue-500/30 '
                  "
                >
                  <span>lorem</span>
                  <span>Status</span>
                  <span>Date</span>
                  <span>Progress</span>
                </div>
                <div
                  class="tw-grid tw-grid-cols-4 tw-w-full tw-items-center"
                  :class="
                    $q.dark.isActive ? 'tw-text-white' : 'tw-text-blue-900'
                  "
                >
                  <span>Lorem Ipsum</span>
                  <span class="tw-flex items-center tw-gap-1">
                    <img src="/assets/images/icons/centang-db.svg" alt="" />
                    11.5%
                  </span>
                  <span>22 Jan 2024</span>
                  <div
                    class="tw-rounded-full tw-h-2 tw-w-24"
                    :class="
                      $q.dark.isActive ? 'tw-bg-white' : 'tw-bg-gray-800/20'
                    "
                  >
                    <div
                      class="tw-h-full tw-w-7/12 tw-bg-default-6 tw-rounded-full"
                    ></div>
                  </div>
                </div>
                <div
                  class="tw-grid tw-grid-cols-4 tw-w-full tw-items-center"
                  :class="
                    $q.dark.isActive ? 'tw-text-white' : 'tw-text-blue-900'
                  "
                >
                  <span>Lorem Ipsum</span>
                  <span class="tw-flex items-center tw-gap-1">
                    <img src="/assets/images/icons/error-db.svg" alt="" /> 11.5%
                  </span>
                  <span>22 Jan 2024</span>
                  <div
                    class="tw-rounded-full tw-h-2 tw-w-24"
                    :class="
                      $q.dark.isActive ? 'tw-bg-white' : 'tw-bg-gray-800/20'
                    "
                  >
                    <div
                      class="tw-h-full tw-w-9/12 tw-bg-default-6 tw-rounded-full"
                    ></div>
                  </div>
                </div>
                <div
                  class="tw-grid tw-grid-cols-4 tw-w-full tw-items-center"
                  :class="
                    $q.dark.isActive ? 'tw-text-white' : 'tw-text-blue-900'
                  "
                >
                  <span>Lorem Ipsum</span>
                  <span class="tw-flex items-center tw-gap-1">
                    <img src="/assets/images/icons/cancel-db.svg" alt="" />
                    11.5%
                  </span>
                  <span>22 Jan 2024</span>
                  <div
                    class="tw-rounded-full tw-h-2 tw-w-24"
                    :class="
                      $q.dark.isActive ? 'tw-bg-white' : 'tw-bg-gray-800/20'
                    "
                  >
                    <div
                      class="tw-h-full tw-w-8/12 tw-bg-default-6 tw-rounded-full"
                    ></div>
                  </div>
                </div>
                <div
                  class="tw-grid tw-grid-cols-4 tw-w-full tw-items-center"
                  :class="
                    $q.dark.isActive ? 'tw-text-white' : 'tw-text-blue-900'
                  "
                >
                  <span>Lorem Ipsum</span>
                  <span class="tw-flex items-center tw-gap-1">
                    <img src="/assets/images/icons/centang-db.svg" alt="" />
                    11.5%
                  </span>
                  <span>22 Jan 2024</span>
                  <div
                    class="tw-rounded-full tw-h-2 tw-w-24"
                    :class="
                      $q.dark.isActive ? 'tw-bg-white' : 'tw-bg-gray-800/20'
                    "
                  >
                    <div
                      class="tw-h-full tw-w-7/12 tw-bg-default-6 tw-rounded-full"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="lg:tw-w-1/2 tw-w-full tw-rounded-xl tw-flex tw-flex-wrap lg:tw-flex-row tw-gap-4 lg:tw-max-w-[774px] lg:tw-max-h-[310px]"
            >
              <div
                class="tw-shadow-md tw-p-10 tw-py-7 lg:tw-w-1/2 tw-w-full tw-rounded-xl lg:tw-max-w-[379px]"
                :class="$q.dark.isActive ? 'tw-bg-zinc-900' : 'tw-bg-white'"
              >
                <div class="tw-flex tw-mb-4 tw-justify-between tw-items-center">
                  <div
                    class=""
                    :class="
                      $q.dark.isActive ? 'checkbox-green' : 'checkbox-yellow'
                    "
                  >
                    <input type="checkbox" id="checkbox6" />
                    <label
                      for="checkbox6"
                      :class="$q.dark.isActive ? '' : 'tw-text-blue-900'"
                      >Lorem Ipsum</label
                    >
                  </div>

                  <img
                    :src="
                      $q.dark.isActive
                        ? '/assets/images/icons/dots-db-white.svg'
                        : '/assets/images/icons/dots-db-green.svg'
                    "
                    class="tw-p-1 tw-rounded-xl"
                    width="35px"
                    height="32px"
                    :class="
                      $q.dark.isActive ? 'tw-bg-black' : 'tw-bg-gray-300/30'
                    "
                    alt=""
                  />
                </div>

                <div class="tw-flex tw-mb-4 tw-justify-between tw-items-center">
                  <div
                    class=""
                    :class="
                      $q.dark.isActive ? 'checkbox-green' : 'checkbox-yellow'
                    "
                  >
                    <input type="checkbox" id="checkbox7" />
                    <label
                      for="checkbox7"
                      :class="$q.dark.isActive ? '' : 'tw-text-blue-900'"
                      >Lorem Ipsum</label
                    >
                  </div>

                  <img
                    src="/assets/images/icons/indicator-db.svg"
                    class="tw-p-1 tw-rounded-xl"
                    width="35px"
                    height="32px"
                    alt=""
                  />
                </div>

                <div class="tw-flex tw-mb-4 tw-justify-between tw-items-center">
                  <div
                    class=""
                    :class="
                      $q.dark.isActive ? 'checkbox-green' : 'checkbox-yellow'
                    "
                  >
                    <input type="checkbox" id="checkbox8" />
                    <label
                      for="checkbox8"
                      :class="$q.dark.isActive ? '' : 'tw-text-blue-900'"
                      >Lorem Ipsum</label
                    >
                  </div>

                  <img
                    src="/assets/images/icons/indicator-db.svg"
                    class="tw-p-1 tw-rounded-xl"
                    width="35px"
                    height="32px"
                    alt=""
                  />
                </div>

                <div class="tw-flex tw-mb-4 tw-justify-between tw-items-center">
                  <div
                    class=""
                    :class="
                      $q.dark.isActive ? 'checkbox-green' : 'checkbox-yellow'
                    "
                  >
                    <input type="checkbox" id="checkbox9" />
                    <label
                      for="checkbox9"
                      :class="$q.dark.isActive ? '' : 'tw-text-blue-900'"
                      >Lorem Ipsum</label
                    >
                  </div>

                  <img
                    src="/assets/images/icons/indicator-db.svg"
                    class="tw-p-1 tw-rounded-xl"
                    width="35px"
                    height="32px"
                    alt=""
                  />
                </div>

                <div class="tw-flex tw-mb-4 tw-justify-between tw-items-center">
                  <div
                    class=""
                    :class="
                      $q.dark.isActive ? 'checkbox-green' : 'checkbox-yellow'
                    "
                  >
                    <input type="checkbox" id="checkbox10" />
                    <label
                      for="checkbox10"
                      :class="$q.dark.isActive ? '' : 'tw-text-blue-900'"
                      >Lorem Ipsum</label
                    >
                  </div>

                  <img
                    src="/assets/images/icons/indicator-db.svg"
                    class="tw-p-1 tw-rounded-xl"
                    width="35px"
                    height="32px"
                    alt=""
                  />
                </div>
              </div>
              <div
                class="tw-shadow-md tw-px-10 lg:tw-w-1/2 tw-rounded-xl lg:tw-max-w-[379px]"
                :class="$q.dark.isActive ? 'tw-bg-zinc-900' : 'tw-bg-white'"
              >
                <q-date
                  no-unset
                  color="main-green"
                  minimal
                  :class="$q.dark.isActive ? 'tw-bg-zinc-900' : 'tw-bg-white'"
                  flat
                  v-model="calendarDate"
                  :events="eventsFn"
                  :event-color="
                    (date) => (date[9] % 2 === 0 ? 'main-gold' : 'main-green')
                  "
                  class="full-width tw-w-full"
                />
              </div>
            </div>
          </div>
        </q-page>
      </div>
    </div>
  </q-scroll-area>
</template>

<script>
import { defineComponent } from "vue";
import Highcharts from "highcharts";

export default defineComponent({
  name: "IndexPage",

  mounted() {
    // ==================================== chart line ================================

    Highcharts.chart("chart-line", {
      chart: {
        type: "spline",
        scrollablePlotArea: {
          width: 200,
          scrollPositionX: 1,
        },
        backgroundColor: "transparent",
      },
      credits: {
        enabled: false, // Menghilangkan watermark
      },
      title: {
        text: null, // Menyembunyikan judul
      },
      xAxis: {
        type: "datetime",
        labels: {
          overflow: "justify",
          style: {
            color: "#035c40",
            fontWeight: "bold",
            fontFamily: "Work Sans",
          },
        },
        dateTimeLabelFormats: {
          month: "%b",
        },
        lineWidth: 0, // Menyembunyikan garis xAxis
        tickWidth: 0, // Menyembunyikan tick (tanda) xAxis
      },
      yAxis: {
        title: {
          text: "",
        },
        minorGridLineWidth: 0,
        gridLineWidth: 0,
        alternateGridColor: null,
        labels: {
          enabled: false, // Menyembunyikan label yAxis
        },
      },
      tooltip: {
        // valueSuffix: " m/s",
        backgroundColor: "#035c40",
        borderRadius: 10,
        shadow: false,

        style: {
          color: "white",
          fontSize: "18px",
          padding: "8px",
          fontWeight: "bold",
          fontFamily: "Work Sans",
        },
      },
      plotOptions: {
        spline: {
          lineWidth: 4,
          states: {
            hover: {
              lineWidth: 5,
            },
          },
          marker: {
            enabled: false,
          },
          pointInterval: 3600000, // one hour
        },
      },
      series: [
        {
          name: "",
          color: "#035c40",
          data: [
            [Date.UTC(2022, 8), 40],
            [Date.UTC(2022, 9), 42],
            [Date.UTC(2022, 10), 30],
            [Date.UTC(2022, 11), 60],
            [Date.UTC(2022, 12), 55],
            [Date.UTC(2023, 1), 58],
          ],
        },
        {
          name: "",
          color: "#fff",
          data: [
            [Date.UTC(2022, 8), 10],
            [Date.UTC(2022, 9), 22],
            [Date.UTC(2022, 10), 13],
            [Date.UTC(2022, 11), 36],
            [Date.UTC(2022, 12), 35],
            [Date.UTC(2023, 1), 36],
          ],
        },
      ],
      legend: {
        enabled: false, // Menyembunyikan legenda
      },
      navigation: {
        menuItemStyle: {
          fontSize: "10px",
        },
      },
    });

    // ==================================== end chart line ================================
    // ==================================== chart bar================================

    Highcharts.chart("chart-bar", {
      chart: {
        type: "column",
        backgroundColor: "transparent",
        responsive: {
          rules: [
            {
              condition: {
                maxWidth: 90,
              },
              chartOptions: {
                legend: {
                  enabled: false,
                },
              },
            },
          ],
        },
      },
      credits: {
        enabled: false,
      },
      title: {
        text: null,
      },
      xAxis: {
        categories: ["17", "18", "19", "20", "21", "22", "23", "24", "25"],
        lineWidth: 0,
        tickWidth: 0,
      },
      yAxis: {
        min: 0,
        title: {
          text: null,
        },
        labels: {
          enabled: false, // Menyembunyikan label yAxis
        },
        gridLineWidth: 0,
      },
      legend: {
        enabled: false,
      },
      tooltip: {
        // valueSuffix: " m/s",
        backgroundColor: "#035c40",
        borderRadius: 10,
        shadow: false,

        style: {
          color: "white",
          fontSize: "18px",
          padding: "8px",
          fontWeight: "bold",
          fontFamily: "Work Sans",
        },
      },
      plotOptions: {
        column: {
          stacking: "normal",
          dataLabels: {
            enabled: true,
          },
          pointWidth: 20,
          borderRadiusTopLeft: 20,
          borderRadiusTopRight: 20,
          borderRadiusBottomLeft: 0,
          borderRadiusBottomRight: 0,
        },
      },
      series: [
        {
          name: "Apples",
          color: "#ebf3f5",
          data: [5, 3, 4, 7, 2, 6, 3, 1, 3],
          dataLabels: {
            enabled: false,
          },
        },
        {
          name: "Oranges",
          color: "#82c7f5",
          data: [3, 4, 4, 2, 5, 2, 3, 3, 4],
          dataLabels: {
            enabled: false,
          },
        },
        {
          name: "Bananas",
          color: "#6e76e6",
          data: [2, 5, 6, 2, 1, 2, 3, 1, 2],
          dataLabels: {
            enabled: false,
          },
        },
      ],
    });

    // ==================================== end chart bar================================
    // ==================================== chart bar single================================
    Highcharts.chart("chart-single", {
      chart: {
        type: "column",
        backgroundColor: "transparent",
      },
      title: {
        text: null,
      },
      credits: {
        enabled: false,
      },
      legend: {
        enabled: false,
      },
      xAxis: {
        categories: ["00", "04", "08", "12", "14", "16", "18"],
        title: {
          text: null,
        },
        lineWidth: 0, // Menyembunyikan garis xAxis
        tickWidth: 0,
        labels: {
          style: {
            color: "#035c40",
            fontWeight: "bold",
            fontFamily: "Work Sans",
          },
        },
      },
      yAxis: {
        title: {
          text: null,
        },
        gridLineWidth: 0,
        labels: {
          enabled: false, // Menyembunyikan label yAxis
        },
      },
      plotOptions: {
        column: {
          pointWidth: 20,
        },
        bar: {
          dataLabels: {
            enabled: true,
          },
        },
      },
      tooltip: {
        // valueSuffix: " m/s",
        backgroundColor: "#035c40",
        borderRadius: 10,
        shadow: false,

        style: {
          color: "white",
          fontSize: "18px",
          padding: "8px",
          fontWeight: "bold",
          fontFamily: "Work Sans",
        },
      },
      series: [
        {
          name: "Nilai",
          data: [20, 10, 30, 40, 50, 35, 25],
          color: {
            linearGradient: {
              x1: 0,
              x2: 0,
              y1: 0,
              y2: 1,
            },
            stops: [
              [0, "#bba64d"],
              [1, "white"],
            ],
          },
        },
      ],
    });
    // ==================================== end chart single================================
    // ==================================== chart pie================================
    Highcharts.chart("chart-pie", {
      chart: {
        type: "pie",
        backgroundColor: "transparent",
      },
      title: {
        text: null,
      },
      credits: {
        enabled: false,
      },
      tooltip: {
        valueSuffix: "%",
      },
      subtitle: {
        text: null,
      },
      plotOptions: {
        series: {
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: [
            {
              enabled: false,
              distance: 0,
            },
            {
              enabled: false,
              distance: -40,
              format: "{point.percentage:.1f}%",
              style: {
                fontSize: "1.2em",
                textOutline: "none",
                opacity: 0.7,
              },
              filter: {
                operator: ">",
                property: "percentage",
                value: 10,
              },
            },
          ],
        },
      },
      tooltip: {
        // valueSuffix: " m/s",
        backgroundColor: "#035c40",
        borderRadius: 10,
        shadow: false,

        style: {
          color: "white",
          fontSize: "18px",
          padding: "8px",
          fontWeight: "bold",
          fontFamily: "Work Sans",
        },
      },
      series: [
        {
          name: "Percentage",
          colorByPoint: true,
          data: [
            {
              name: "Water",
              color: "#bba64d",
              y: 55,
            },
            {
              name: "Fat",
              color: "#7aeb8f",
              y: 26,
            },
            {
              name: "Carbohydrates",
              color: "white",
              y: 10,
            },
          ],
        },
      ],
    });
    // ==================================== end chart pie================================
  },
  // methods: {
  //   toggleDarkMode() {
  //     window.location.reload(); // Reload halaman
  //     console.log("ll");
  //   },
  // },
});
</script>
