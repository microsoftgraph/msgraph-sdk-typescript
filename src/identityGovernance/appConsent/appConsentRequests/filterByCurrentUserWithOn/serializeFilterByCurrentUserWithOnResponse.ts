import type {AppConsentRequest} from '../../../../models/appConsentRequest';
import {serializeAppConsentRequest} from '../../../../models/serializeAppConsentRequest';
import {serializeBaseCollectionPaginationCountResponse} from '../../../../models/serializeBaseCollectionPaginationCountResponse';
import type {FilterByCurrentUserWithOnResponse} from './filterByCurrentUserWithOnResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFilterByCurrentUserWithOnResponse(writer: SerializationWriter, filterByCurrentUserWithOnResponse: FilterByCurrentUserWithOnResponse | undefined = {} as FilterByCurrentUserWithOnResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, filterByCurrentUserWithOnResponse)
        writer.writeCollectionOfObjectValues<AppConsentRequest>("value", filterByCurrentUserWithOnResponse.value, serializeAppConsentRequest);
}
