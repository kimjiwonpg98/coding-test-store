package 백준.문자열.kt

import java.io.BufferedReader
import java.io.InputStreamReader

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val number = br.readLine()!!.toInt()
    val arr: Array<Array<String>> = Array(number) { Array(number) { "" } }
    var count = 0
    var horizontalCount = 0
    var verticalCount = 0

    for (i in 1..number) {
        br.readLine().split("").filterNot { it.isBlank() }.map {
            arr[i - 1][count] = it
            count++
        }
        count = 0
    }

    for (i in 0..number - 1) {
        var space = 0
        for (j in 0..number - 1) {
            // X가 나오기 전까지는 유지 (2 이상이면 카운트)
            if (arr[i][j] == ".") {
                space++
                if (space == 2) {
                    horizontalCount++
                }
            } else {
                space = 0
                continue
            }
        }
    }

    for (j in 0..number - 1) {
        var space = 0
        for (i in 0..number - 1) {
            // X가 나오기 전까지는 유지 (2 이상이면 카운트)
            if (arr[i][j] == ".") {
                space++
                if (space == 2) {
                    verticalCount++
                }
            } else {
                space = 0
                continue
            }
        }
    }

    println("$horizontalCount $verticalCount")
}
