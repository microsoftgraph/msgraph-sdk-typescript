import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {EndpointType} from './endpointType';
import {IdentitySet} from './identitySet';
import {ParticipantInfo} from './participantInfo';
import {serializeIdentitySet} from './serializeIdentitySet';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoParticipantInfo(participantInfo: ParticipantInfo | undefined = {} as ParticipantInfo) : Record<string, (node: ParseNode) => void> {
    return {
        "countryCode": n => { participantInfo.countryCode = n.getStringValue(); },
        "endpointType": n => { participantInfo.endpointType = n.getEnumValue<EndpointType>(EndpointType); },
        "identity": n => { participantInfo.identity = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "languageId": n => { participantInfo.languageId = n.getStringValue(); },
        "@odata.type": n => { participantInfo.odataType = n.getStringValue(); },
        "participantId": n => { participantInfo.participantId = n.getStringValue(); },
        "region": n => { participantInfo.region = n.getStringValue(); },
    }
}
