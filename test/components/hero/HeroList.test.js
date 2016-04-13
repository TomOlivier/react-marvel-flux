import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import HeroList from '../../../src/components/hero/HeroList'

const heroesEx = [{
  "id": 1011334,
  "name": "3-D Man",
  "description": "",
  "modified": "2014-04-29T14:18:17-0400",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011334",
  "comics": {
    "available": 11,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011334/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/21366",
        "name": "Avengers: The Initiative (2007) #14"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/24571",
        "name": "Avengers: The Initiative (2007) #14 (SPOTLIGHT VARIANT)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/21546",
        "name": "Avengers: The Initiative (2007) #15"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/21741",
        "name": "Avengers: The Initiative (2007) #16"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/21975",
        "name": "Avengers: The Initiative (2007) #17"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/22299",
        "name": "Avengers: The Initiative (2007) #18"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/22300",
        "name": "Avengers: The Initiative (2007) #18 (ZOMBIE VARIANT)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/22506",
        "name": "Avengers: The Initiative (2007) #19"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/10223",
        "name": "Marvel Premiere (1972) #35"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/10224",
        "name": "Marvel Premiere (1972) #36"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/10225",
        "name": "Marvel Premiere (1972) #37"
      }
    ],
    "returned": 11
  },
  "series": {
    "available": 2,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011334/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1945",
        "name": "Avengers: The Initiative (2007 - 2010)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2045",
        "name": "Marvel Premiere (1972 - 1981)"
      }
    ],
    "returned": 2
  },
  "stories": {
    "available": 17,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011334/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/19947",
        "name": "Cover #19947",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/19948",
        "name": "The 3-D Man!",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/19949",
        "name": "Cover #19949",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/19950",
        "name": "The Devil's Music!",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/19951",
        "name": "Cover #19951",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/19952",
        "name": "Code-Name:  The Cold Warrior!",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/47185",
        "name": "Avengers: The Initiative (2007) #14 - Int",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/47499",
        "name": "Avengers: The Initiative (2007) #15 - Int",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/47792",
        "name": "Avengers: The Initiative (2007) #16",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/47793",
        "name": "Avengers: The Initiative (2007) #16 - Int",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/48362",
        "name": "Avengers: The Initiative (2007) #17 - Int",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/49104",
        "name": "Avengers: The Initiative (2007) #18 - Int",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/49106",
        "name": "Avengers: The Initiative (2007) #18, Zombie Variant - Int",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/49888",
        "name": "Avengers: The Initiative (2007) #19",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/49889",
        "name": "Avengers: The Initiative (2007) #19 - Int",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/54371",
        "name": "Avengers: The Initiative (2007) #14, Spotlight Variant - Int",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/96303",
        "name": "Deadpool (1997) #44",
        "type": "interiorStory"
      }
    ],
    "returned": 17
  },
  "events": {
    "available": 1,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011334/events",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/269",
        "name": "Secret Invasion"
      }
    ],
    "returned": 1
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/74/3-d_man?utm_campaign=apiRef&utm_source=298bab46381a6daaaee19aa5c8cafea5"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/3-D_Man_(Chandler)?utm_campaign=apiRef&utm_source=298bab46381a6daaaee19aa5c8cafea5"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1011334/3-d_man?utm_campaign=apiRef&utm_source=298bab46381a6daaaee19aa5c8cafea5"
    }
  ]
}];

describe('<HeroList/> component', () => {

  const wrapper = shallow(<HeroList />)
  const inst = wrapper.instance()

  it('Should be mounted and loading', () => {
    expect(wrapper.state().loading).to.equal(true)
    expect(wrapper.find('div').text()).to.equal("Loading ...")
    expect(wrapper.find('h2').length).to.equal(0)
  })

  it("Should display a h2 text when it has loaded", () => {
    wrapper.setState({ loading: false })
    expect(wrapper.find('h2').length).to.equal(1)
    expect(wrapper.find('h2').text()).to.equal("Select your Hero")
  })

  it("If there are no heroes, there shouldn't be any HeroListItem", () => {
    expect(wrapper.state().heroes.length).to.equal(0)
    expect(wrapper.find('HeroListItem').length).to.equal(0)
  })

  it("If there is an Hero, an HeroListItem should be present", () => {
    wrapper.setState({ loading: false, heroes: heroesEx})
    expect(wrapper.find('HeroListItem').length).to.equal(1)
  })
})