import type {Bitlocker} from './bitlocker';
import {createBitlockerFromDiscriminatorValue} from './createBitlockerFromDiscriminatorValue';
import {createThreatAssessmentRequestFromDiscriminatorValue} from './createThreatAssessmentRequestFromDiscriminatorValue';
import type {InformationProtection} from './informationProtection';
import {serializeBitlocker} from './serializeBitlocker';
import {serializeThreatAssessmentRequest} from './serializeThreatAssessmentRequest';
import type {ThreatAssessmentRequest} from './threatAssessmentRequest';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoInformationProtection(informationProtection: InformationProtection | undefined = {} as InformationProtection) : Record<string, (node: ParseNode) => void> {
    return {
        "bitlocker": n => { informationProtection.bitlocker = n.getObjectValue<Bitlocker>(createBitlockerFromDiscriminatorValue); },
        "@odata.type": n => { informationProtection.odataType = n.getStringValue(); },
        "threatAssessmentRequests": n => { informationProtection.threatAssessmentRequests = n.getCollectionOfObjectValues<ThreatAssessmentRequest>(createThreatAssessmentRequestFromDiscriminatorValue); },
    }
}
