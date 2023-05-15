import {AppConsentRequestScope} from './appConsentRequestScope';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAppConsentRequestScope(appConsentRequestScope: AppConsentRequestScope | undefined = {} as AppConsentRequestScope) : Record<string, (node: ParseNode) => void> {
    return {
        "displayName": n => { appConsentRequestScope.displayName = n.getStringValue(); },
        "@odata.type": n => { appConsentRequestScope.odataType = n.getStringValue(); },
    }
}
