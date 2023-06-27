import {Entity} from './entity';
import {Duration, Parsable} from '@microsoft/kiota-abstractions';

export interface LearningContent extends Entity, Parsable {
    /**
     * Keywords, topics, and other tags associated with the learning content. Optional.
     */
    additionalTags?: string[] | undefined;
    /**
     * The content web URL for the learning content. Required.
     */
    contentWebUrl?: string | undefined;
    /**
     * The authors, creators, or contributors of the learning content. Optional.
     */
    contributors?: string[] | undefined;
    /**
     * The date and time when the learning content was created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Optional.
     */
    createdDateTime?: Date | undefined;
    /**
     * The description or summary for the learning content. Optional.
     */
    description?: string | undefined;
    /**
     * The duration of the learning content in seconds. The value is represented in ISO 8601 format for durations. Optional.
     */
    duration?: Duration | undefined;
    /**
     * Unique external content ID for the learning content. Required.
     */
    externalId?: string | undefined;
    /**
     * The format of the learning content. For example, Course, Video, Book, Book Summary, Audiobook Summary. Optional.
     */
    format?: string | undefined;
    /**
     * Indicates whether the content is active or not. Inactive content doesn't show up in the UI. The default value is true. Optional.
     */
    isActive?: boolean | undefined;
    /**
     * Indicates whether the learning content requires the user to sign-in on the learning provider platform or not. The default value is false. Optional.
     */
    isPremium?: boolean | undefined;
    /**
     * Indicates whether the learning content is searchable or not. The default value is true. Optional.
     */
    isSearchable?: boolean | undefined;
    /**
     * The language of the learning content, for example, en-us or fr-fr. Required.
     */
    languageTag?: string | undefined;
    /**
     * The date and time when the learning content was last modified. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Optional.
     */
    lastModifiedDateTime?: Date | undefined;
    /**
     * The number of pages of the learning content, for example, 9. Optional.
     */
    numberOfPages?: number | undefined;
    /**
     * The skills tags associated with the learning content. Optional.
     */
    skillTags?: string[] | undefined;
    /**
     * The source name of the learning content, such as LinkedIn Learning or Coursera. Optional.
     */
    sourceName?: string | undefined;
    /**
     * The URL of learning content thumbnail image. Optional.
     */
    thumbnailWebUrl?: string | undefined;
    /**
     * The title of the learning content. Required.
     */
    title?: string | undefined;
}
