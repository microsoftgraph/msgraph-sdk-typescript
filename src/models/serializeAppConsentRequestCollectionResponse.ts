import {AppConsentRequest} from './appConsentRequest';
import {AppConsentRequestCollectionResponse} from './appConsentRequestCollectionResponse';
import {serializeAppConsentRequest} from './serializeAppConsentRequest';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAppConsentRequestCollectionResponse(writer: SerializationWriter, appConsentRequestCollectionResponse: AppConsentRequestCollectionResponse | undefined = {} as AppConsentRequestCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, appConsentRequestCollectionResponse)
        writer.writeCollectionOfObjectValues<AppConsentRequest>("value", appConsentRequestCollectionResponse.value, serializeAppConsentRequest);
}
