import { type InvestigationSecurityState } from './investigationSecurityState';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeInvestigationSecurityState(writer: SerializationWriter, investigationSecurityState: InvestigationSecurityState | undefined = {} as InvestigationSecurityState) : void {
        writer.writeStringValue("name", investigationSecurityState.name);
        writer.writeStringValue("@odata.type", investigationSecurityState.odataType);
        writer.writeStringValue("status", investigationSecurityState.status);
        writer.writeAdditionalData(investigationSecurityState.additionalData);
}
