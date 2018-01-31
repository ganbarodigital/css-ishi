# Visual Styling

## Introduction

You can use several of Ishi's visual style CSS classes with tables.

* `table-border-block`

You can apply these visual style classes to `<table>`.

## Table Borders

### table-border-block

This table uses `<table class="table-border-block">`.

<table class="table-border-block">
    <thead>
        <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Row 1, column 1</td>
            <td>Row 1, column 2</td>
            <td>Row 1, column 3</td>
        </tr>
        <tr>
            <td>Row 2, column 1</td>
            <td>Row 2, column 2</td>
            <td>Row 2, column 3</td>
        </tr>
        <tr>
            <td>Row 3, column 1</td>
            <td>Row 3, column 2</td>
            <td>Row 3, column 3</td>
        </tr>
        <tr>
            <td>Row 4, column 1</td>
            <td>Row 4, column 2</td>
            <td>Row 4, column 3</td>
        </tr>
    </tbody>
</table>

This is the same table, with an added `<tfoot>`.

<table class="table-border-block">
    <thead>
        <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Row 1, column 1</td>
            <td>Row 1, column 2</td>
            <td>Row 1, column 3</td>
        </tr>
        <tr>
            <td>Row 2, column 1</td>
            <td>Row 2, column 2</td>
            <td>Row 2, column 3</td>
        </tr>
        <tr>
            <td>Row 3, column 1</td>
            <td>Row 3, column 2</td>
            <td>Row 3, column 3</td>
        </tr>
        <tr>
            <td>Row 4, column 1</td>
            <td>Row 4, column 2</td>
            <td>Row 4, column 3</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>Total 1</td>
            <td>Total 2</td>
            <td>Total 3</td>
        </tr>
    </tfoot>
</table>


### table-border-block with Context

You can combine `.table-border-block` with any of Ishi's [table context classes](contexts.html). For example, this table uses `<table class="table-border-block attention">`.

<table class="table-border-block table-attention">
    <thead>
        <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Row 1, column 1</td>
            <td>Row 1, column 2</td>
            <td>Row 1, column 3</td>
        </tr>
        <tr>
            <td>Row 2, column 1</td>
            <td>Row 2, column 2</td>
            <td>Row 2, column 3</td>
        </tr>
        <tr>
            <td>Row 3, column 1</td>
            <td>Row 3, column 2</td>
            <td>Row 3, column 3</td>
        </tr>
        <tr>
            <td>Row 4, column 1</td>
            <td>Row 4, column 2</td>
            <td>Row 4, column 3</td>
        </tr>
    </tbody>
</table>

This is the same table, with an added `<tfoot>`.

<table class="table-border-block attention">
    <thead>
        <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Row 1, column 1</td>
            <td>Row 1, column 2</td>
            <td>Row 1, column 3</td>
        </tr>
        <tr>
            <td>Row 2, column 1</td>
            <td>Row 2, column 2</td>
            <td>Row 2, column 3</td>
        </tr>
        <tr>
            <td>Row 3, column 1</td>
            <td>Row 3, column 2</td>
            <td>Row 3, column 3</td>
        </tr>
        <tr>
            <td>Row 4, column 1</td>
            <td>Row 4, column 2</td>
            <td>Row 4, column 3</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>Total 1</td>
            <td>Total 2</td>
            <td>Total 3</td>
        </tr>
    </tfoot>
</table>

