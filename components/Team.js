import QueueAnim from 'rc-queue-anim'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import React from 'react'
const defaultData = {
  wrapper: {
    className: 'home-page-wrapper teams2-wrapper',
  },
  page: {
    className: 'home-page teams2',
  },
  OverPack: {
    playScale: 0.3,
    className: '',
  },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: '团队成员',
      },
    ],
  },
  block: {
    className: 'block-wrapper',
    gutter: 72,
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children:
            'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            {
              name: 'title',
              className: 'teams2-title',
              children: '叶秀英',
            },
            {
              name: 'content',
              className: 'teams2-job',
              children: '公司+职位 信息暂缺',
            },
            {
              name: 'content1',
              className: 'teams2-content',
              children: 'AntV 是蚂蚁金服全新一代数据可视化解决方案。',
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children:
            'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ',
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            {
              name: 'title',
              className: 'teams2-title',
              children: '韩勇',
            },
            {
              name: 'content',
              className: 'teams2-job',
              children: '公司+职位 信息暂缺',
            },
            {
              name: 'content1',
              className: 'teams2-content',
              children: '语雀是一款优雅高效的在线文档编辑与协同工具。',
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children:
            'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            {
              name: 'title',
              className: 'teams2-title',
              children: '叶秀英',
            },
            {
              name: 'content',
              className: 'teams2-job',
              children: '公司+职位 信息暂缺',
            },
            {
              name: 'content1',
              className: 'teams2-content',
              children: 'AntV 是蚂蚁金服全新一代数据可视化解决方案。',
            },
          ],
        },
      },
      {
        name: 'block3',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children:
            'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            {
              name: 'title',
              className: 'teams2-title',
              children: '叶秀英',
            },
            {
              name: 'content',
              className: 'teams2-job',
              children: '公司+职位 信息暂缺',
            },
            {
              name: 'content1',
              className: 'teams2-content',
              children: 'AntV 是蚂蚁金服全新一代数据可视化解决方案。',
            },
          ],
        },
      },
      {
        name: 'block4',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children:
            'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ',
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            {
              name: 'title',
              className: 'teams2-title',
              children: '韩勇',
            },
            {
              name: 'content',
              className: 'teams2-job',
              children: '公司+职位 信息暂缺',
            },
            {
              name: 'content1',
              className: 'teams2-content',
              children: '语雀是一款优雅高效的在线文档编辑与协同工具。',
            },
          ],
        },
      },
      {
        name: 'block5',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children:
            'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            {
              name: 'title',
              className: 'teams2-title',
              children: '叶秀英',
            },
            {
              name: 'content',
              className: 'teams2-job',
              children: '公司+职位 信息暂缺',
            },
            {
              name: 'content1',
              className: 'teams2-content',
              children: 'AntV 是蚂蚁金服全新一代数据可视化解决方案。',
            },
          ],
        },
      },
      {
        name: 'block6',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children:
            'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            {
              name: 'title',
              className: 'teams2-title',
              children: '叶秀英',
            },
            {
              name: 'content',
              className: 'teams2-job',
              children: '公司+职位 信息暂缺',
            },
            {
              name: 'content1',
              className: 'teams2-content',
              children: 'AntV 是蚂蚁金服全新一代数据可视化解决方案。',
            },
          ],
        },
      },
      {
        name: 'block7',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children:
            'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ',
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            {
              name: 'title',
              className: 'teams2-title',
              children: '韩勇',
            },
            {
              name: 'content',
              className: 'teams2-job',
              children: '公司+职位 信息暂缺',
            },
            {
              name: 'content1',
              className: 'teams2-content',
              children: '语雀是一款优雅高效的在线文档编辑与协同工具。',
            },
          ],
        },
      },
      {
        name: 'block8',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children:
            'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            {
              name: 'title',
              className: 'teams2-title',
              children: '叶秀英',
            },
            {
              name: 'content',
              className: 'teams2-job',
              children: '公司+职位 信息暂缺',
            },
            {
              name: 'content1',
              className: 'teams2-content',
              children: 'AntV 是蚂蚁金服全新一代数据可视化解决方案。',
            },
          ],
        },
      },
    ],
  },
}
export const getChildrenToRender = (item, i) => {
  let tag = item.name && item.name.indexOf('title') === 0 ? 'h1' : 'div'
  tag = item.href ? 'a' : tag
  let children =
    typeof item.children === 'string' &&
    item.children.match(/^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?/)
      ? React.createElement('img', { src: item.children, alt: 'img' })
      : React.createElement('span', {
          dangerouslySetInnerHTML: { __html: item.children },
        })
  if (item.name.indexOf('button') === 0) {
    if (typeof item.children === 'object') {
      children = React.createElement(
        Button,
        {
          ...item.children,
          'data-edit': 'link,text',
        },
        React.createElement('span', {
          dangerouslySetInnerHTML: { __html: item.children.children },
        })
      )
    } else {
      // 去除 linkA, linkA 全部用文字编辑的 #
      item['data-edit'] = 'linkA,text'
    }
  }
  if (item.name.indexOf('link') === 0) {
    item['data-edit'] = 'linkA,text'
  }
  return React.createElement(tag, { key: i.toString(), ...item }, children)
}
class Teams extends React.PureComponent {
  getBlockChildren = (data) =>
    data.map((item, i) => {
      const { titleWrapper, image, ...$item } = item
      return (
        <div key={i.toString()} {...$item}>
          <div>
            <div>
              <div {...image}>
                <img src={image.children} alt="img" />
              </div>
            </div>
            <div span={17}>
              <QueueAnim {...titleWrapper} type="bottom">
                {titleWrapper.children.map(getChildrenToRender)}
              </QueueAnim>
            </div>
          </div>
        </div>
      )
    })

  render() {
    const { ...props } = this.props
    const { dataSource = defaultData } = props
    delete props.dataSource
    delete props.isMobile
    const listChildren = this.getBlockChildren(dataSource.block.children)
    return (
      <div {...props} {...dataSource.wrapper}>
        <div {...dataSource.page}>
          <div
            {...dataSource.titleWrapper}
            /* replace-start */
            data-edit="titleWrapper"
            /* replace-end */
          >
            {dataSource.titleWrapper.children.map(getChildrenToRender)}
          </div>
          <OverPack {...dataSource.OverPack}>
            <QueueAnim type="bottom" key="tween" leaveReverse>
              <QueueAnim
                type="bottom"
                key="block"
                {...dataSource.block}
                component={'ul'}
                data-edit="ul"
              >
                {listChildren}
              </QueueAnim>
            </QueueAnim>
          </OverPack>
        </div>
      </div>
    )
  }
}

export default Teams
