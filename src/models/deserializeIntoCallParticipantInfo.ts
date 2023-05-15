import {CallParticipantInfo} from './callParticipantInfo';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {IdentitySet} from './identitySet';
import {serializeIdentitySet} from './serializeIdentitySet';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCallParticipantInfo(callParticipantInfo: CallParticipantInfo | undefined = {} as CallParticipantInfo) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { callParticipantInfo.odataType = n.getStringValue(); },
        "participant": n => { callParticipantInfo.participant = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
    }
}
