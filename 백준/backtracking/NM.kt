package 백준.backtracking

import java.io.BufferedReader
import java.io.InputStreamReader

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val (n, m) = br.readLine().split(" ").map { it.toInt() }
    val arr = Array(n + 1) { i -> i }
    val visited = Array(n + 1) { false }

    fun dfs(
        idx: Int,
        len: Int,
        str: String,
    ) {
        if (len == m) {
            println(str)
            return
        }

        for (i in 1..n) {
            if (!visited[i]) {
                visited[i] = true

                if (len == 0) {
                    dfs(i, 1, arr[i].toString())
                } else {
                    dfs(i, len + 1, "$str ${arr[i]}")
                }

                visited[i] = false // 방문 여부를 다시 미방문 상태로 변경
            }
        }
    }

    dfs(1, 0, "")
}
