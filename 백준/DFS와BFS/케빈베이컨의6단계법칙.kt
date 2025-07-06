package 백준.DFS와BFS

import java.io.BufferedReader
import java.io.InputStreamReader
import java.util.LinkedList
import java.util.Queue

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val (n, m) = br.readLine().split(" ").map { it.toInt() }
    val graph = Array(n + 1) { mutableListOf<Int>() }
    val sum = MutableList(n + 1) { 0 }

    // graph를 만들어서 BFS할 수 있도록 함
    repeat(m) {
        val (num, num2) = br.readLine().split(" ").map { it.toInt() }
        graph[num].add(num2)
        graph[num2].add(num)
    }

    // 첫번쨰 숫자들의 큐를 만들어서 진행
    for (start in 1..n) {
        val visited = MutableList(n + 1) { false }
        val queue: Queue<Pair<Int, Int>> = LinkedList()
        queue.add(Pair(start, 0))
        visited[start] = true

        // queue에 값이 없으면 끝
        while (queue.isNotEmpty()) {
            val (cur, dist) = queue.poll()
            sum[start] += dist
            for (next in graph[cur]) {
                if (!visited[next]) {
                    visited[next] = true
                    queue.add(Pair(next, dist + 1))
                }
            }
        }
    }
    val min = sum.drop(1).minOrNull()
    val answer = sum.indexOfFirst { it == min }
    println(answer)
}
