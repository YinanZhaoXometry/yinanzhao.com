import { groq } from 'next-sanity'

import { client } from '~/sanity/lib/client'
import { type Project } from '~/sanity/schemas/project'

export type Resume = {
  company: string
  title: string
  start: string
  end?: string | null
  logo: string
  descriptions: string[]
}

export const SETTINGS_QUERY = groq`
*[_type == "settings"][0] {
	"projects": projects[]->{
		_id,
		name,
		url,
		description,
		icon
	},
	"heroPhotos": heroPhotos[].asset->url,
	"resume": resume[]{
		company,
		title,
		start,
		end,
		descriptions,
		"logo": logo.asset->url
	}
}`

export const SETTINGS_RESUMES_QUERY = groq`
*[_type == "settings"][0] {
	"resume": resume[]{
		company,
		title,
		start,
		end,
		descriptions,
		"logo": logo.asset->url
	}
}`

export const fetchSettings = () =>
  client.fetch<{
    projects: Project[] | null
    heroPhotos?: string[] | null
    resume?: Resume[] | null
  }>(SETTINGS_QUERY)

export const fetchSettingsResumes = () =>
  client.fetch<{
    resume?: Resume[] | null
  }>(SETTINGS_RESUMES_QUERY)
