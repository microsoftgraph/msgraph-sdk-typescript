import {UrlMatchInfo} from './urlMatchInfo';
import {UrlToItemResolverBase} from './urlToItemResolverBase';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ItemIdResolver extends Parsable, UrlToItemResolverBase {
    /**
     * Pattern that specifies how to form the ID of the external item that the URL represents. The named groups from the regular expression in urlPattern within the urlMatchInfo can be referenced by inserting the group name inside curly brackets.
     */
    itemId?: string | undefined;
    /**
     * Configurations to match and resolve URL.
     */
    urlMatchInfo?: UrlMatchInfo | undefined;
}
