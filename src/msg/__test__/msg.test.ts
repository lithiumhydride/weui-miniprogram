import path from 'path'
import simulate from 'miniprogram-simulate'

describe('msg', () => {
    const msg = simulate.load(path.resolve(__dirname, '../msg'))

    test('basic', async () => {
        const comp = simulate.render(
            simulate.load({
                compiler: 'official',
                rootPath: __dirname,
                usingComponents: {
                    'mp-msg': msg
                },
                template: `
                    <mp-msg type="success" title="操作成功">
                        <view slot="desc">内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现<navigator url="" class="weui-msg__link">文字链接</navigator></view>
                        <view slot="extend">
                            <view>1. 说明1</view>
                            <view>2. 说明2</view>
                        </view>
                        <view slot="handle">
                            <button class="weui-btn" type="primary">主要操作</button>
                            <button class="weui-btn" type="default">辅助操作</button>
                        </view>
                        <view slot="footer">
                            <view class="weui-footer__links">
                                <navigator url="" class="weui-footer__link">底部链接文本</navigator>
                            </view>
                            <view class="weui-footer__text">Copyright © 2008-2016 weui.io</view>
                        </view>
                    </mp-msg>
                `
            })
        )
        comp.attach(document.createElement('parent-wrapper'))
        await simulate.sleep(0)
        expect(comp.toJSON()).toMatchSnapshot()
    })
})
