import {Entity} from '../entity';
import {ArticleIndicator} from './articleIndicator';
import {FormattedContent} from './formattedContent';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Article extends Entity, Parsable {
    /**
     * The body property
     */
    body?: FormattedContent | undefined;
    /**
     * The date and time when this article was created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     */
    createdDateTime?: Date | undefined;
    /**
     * URL of the header image for this article, used for display purposes.
     */
    imageUrl?: string | undefined;
    /**
     * Indicators related to this article.
     */
    indicators?: ArticleIndicator[] | undefined;
    /**
     * Indicates whether this article is currently featured by Microsoft.
     */
    isFeatured?: boolean | undefined;
    /**
     * The most recent date and time when this article was updated. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     */
    lastUpdatedDateTime?: Date | undefined;
    /**
     * The summary property
     */
    summary?: FormattedContent | undefined;
    /**
     * Tags for this article, communicating keywords, or key concepts.
     */
    tags?: string[] | undefined;
    /**
     * The title of this article.
     */
    title?: string | undefined;
}
