import {Entity} from './entity';
import {SharedInsight} from './sharedInsight';
import {Trending} from './trending';
import {UsedInsight} from './usedInsight';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OfficeGraphInsights extends Entity, Parsable {
    /**
     * Calculated relationship identifying documents shared with or by the user. This includes URLs, file attachments, and reference attachments to OneDrive for Business and SharePoint files found in Outlook messages and meetings. This also includes URLs and reference attachments to Teams conversations. Ordered by recency of share.
     */
    shared?: SharedInsight[] | undefined;
    /**
     * Calculated relationship identifying documents trending around a user. Trending documents are calculated based on activity of the user's closest network of people and include files stored in OneDrive for Business and SharePoint. Trending insights help the user to discover potentially useful content that the user has access to, but has never viewed before.
     */
    trending?: Trending[] | undefined;
    /**
     * Calculated relationship identifying the latest documents viewed or modified by a user, including OneDrive for Business and SharePoint documents, ranked by recency of use.
     */
    used?: UsedInsight[] | undefined;
}
