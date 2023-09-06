import { type ConditionalAccessApplications } from './conditionalAccessApplications';
import { ConditionalAccessClientApp } from './conditionalAccessClientApp';
import { type ConditionalAccessClientApplications } from './conditionalAccessClientApplications';
import { type ConditionalAccessConditionSet } from './conditionalAccessConditionSet';
import { type ConditionalAccessDevices } from './conditionalAccessDevices';
import { type ConditionalAccessLocations } from './conditionalAccessLocations';
import { type ConditionalAccessPlatforms } from './conditionalAccessPlatforms';
import { type ConditionalAccessUsers } from './conditionalAccessUsers';
import { RiskLevel } from './riskLevel';
import { serializeConditionalAccessApplications } from './serializeConditionalAccessApplications';
import { serializeConditionalAccessClientApplications } from './serializeConditionalAccessClientApplications';
import { serializeConditionalAccessDevices } from './serializeConditionalAccessDevices';
import { serializeConditionalAccessLocations } from './serializeConditionalAccessLocations';
import { serializeConditionalAccessPlatforms } from './serializeConditionalAccessPlatforms';
import { serializeConditionalAccessUsers } from './serializeConditionalAccessUsers';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeConditionalAccessConditionSet(writer: SerializationWriter, conditionalAccessConditionSet: ConditionalAccessConditionSet | undefined = {} as ConditionalAccessConditionSet) : void {
        writer.writeObjectValue<ConditionalAccessApplications>("applications", conditionalAccessConditionSet.applications, serializeConditionalAccessApplications);
        writer.writeObjectValue<ConditionalAccessClientApplications>("clientApplications", conditionalAccessConditionSet.clientApplications, serializeConditionalAccessClientApplications);
        writer.writeCollectionOfObjectValues<ConditionalAccessClientApp>("clientAppTypes", conditionalAccessConditionSet.clientAppTypes, object);
        writer.writeObjectValue<ConditionalAccessDevices>("devices", conditionalAccessConditionSet.devices, serializeConditionalAccessDevices);
        writer.writeObjectValue<ConditionalAccessLocations>("locations", conditionalAccessConditionSet.locations, serializeConditionalAccessLocations);
        writer.writeStringValue("@odata.type", conditionalAccessConditionSet.odataType);
        writer.writeObjectValue<ConditionalAccessPlatforms>("platforms", conditionalAccessConditionSet.platforms, serializeConditionalAccessPlatforms);
        writer.writeCollectionOfObjectValues<RiskLevel>("servicePrincipalRiskLevels", conditionalAccessConditionSet.servicePrincipalRiskLevels, object);
        writer.writeCollectionOfObjectValues<RiskLevel>("signInRiskLevels", conditionalAccessConditionSet.signInRiskLevels, object);
        writer.writeCollectionOfObjectValues<RiskLevel>("userRiskLevels", conditionalAccessConditionSet.userRiskLevels, object);
        writer.writeObjectValue<ConditionalAccessUsers>("users", conditionalAccessConditionSet.users, serializeConditionalAccessUsers);
        writer.writeAdditionalData(conditionalAccessConditionSet.additionalData);
}
