import { type AppConsentRequestScope } from './appConsentRequestScope';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAppConsentRequestScope(appConsentRequestScope: AppConsentRequestScope | undefined = {} as AppConsentRequestScope) : Record<string, (node: ParseNode) => void> {
    return {
        "displayName": n => { appConsentRequestScope.displayName = n.getStringValue(); },
        "@odata.type": n => { appConsentRequestScope.odataType = n.getStringValue(); },
    }
}
