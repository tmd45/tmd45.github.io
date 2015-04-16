module CustomHelpers

  # 共通化した日付形式で応答するヘルパー
  #
  # @param [String] date string ex. "yyyymmdd"
  # @return [String] formatted date string ex. "yyyy-mm-dd aaa."
  #
  # NOTE: とりあえず固定の形式の引数で固定の形式を返せればいい
  def fmtDate(date = nil)
    return if date.nil?
    d = date.to_s
    Time.local(d.slice(0,4), d.slice(4,2), d.slice(6,2)).strftime('%F %a.')
  end
end
