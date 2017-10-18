<template>
    <div>
        <h1>Накладная</h1>
        <button @click="addItem">Добавить</button>
        <table>
            <thead>
            <tr>
                <th>Наименование</th>
                <th>Количество</th>
                <th>Цена</th>
            </tr>
            </thead>
            <tbody>
            <item-row v-for="(row, i) in rows" :data.sync="rows[i]" @delete="onDelete(i)"/>
            </tbody>

            <tfoot>
            <tr>
                <td>Итого:</td>
                <td>{{totalQuantity}}</td>
                <td>{{total.toFixed(2)}}</td>
            </tr>
            </tfoot>
        </table>
    </div>
</template>

<script>
  import itemRow from './item-row.vue'

  export default {
    name:       "my-invoice",
    data() {
      return {
        rows: [
          {
            name:     "товар",
            quantity: 3,
            price:    6.4
          }
        ]
      };
    },
    computed:   {
      total() {
        return this.rows.reduce(
          (total, { quantity, price }) => total + quantity * price,
          0
        );
      },
      totalQuantity() {
        return this.rows.reduce(
          (total, { quantity }) => total + Number(quantity),
          0
        );
      }
    },
    methods:    {
      addItem() {
        this.rows.push({
          name:     "",
          quantity: null,
          price:    null
        });
      },
      onDelete(index) {
        this.rows.splice(index, 1);
      }
    },
    components: {
      itemRow
    },
  }
</script>

<style scoped>

</style>