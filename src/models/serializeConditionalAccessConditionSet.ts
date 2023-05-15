import {ConditionalAccessApplications} from './conditionalAccessApplications';
import {ConditionalAccessClientApp} from './conditionalAccessClientApp';
import {ConditionalAccessClientApplications} from './conditionalAccessClientApplications';
import {ConditionalAccessConditionSet} from './conditionalAccessConditionSet';
import {ConditionalAccessDevices} from './conditionalAccessDevices';
import {ConditionalAccessLocations} from './conditionalAccessLocations';
import {ConditionalAccessPlatforms} from './conditionalAccessPlatforms';
import {ConditionalAccessUsers} from './conditionalAccessUsers';
import {RiskLevel} from './riskLevel';
import {serializeConditionalAccessApplications} from './serializeConditionalAccessApplications';
import {serializeConditionalAccessClientApplications} from './serializeConditionalAccessClientApplications';
import {serializeConditionalAccessDevices} from './serializeConditionalAccessDevices';
import {serializeConditionalAccessLocations} from './serializeConditionalAccessLocations';
import {serializeConditionalAccessPlatforms} from './serializeConditionalAccessPlatforms';
import {serializeConditionalAccessUsers} from './serializeConditionalAccessUsers';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConditionalAccessConditionSet(writer: SerializationWriter, conditionalAccessConditionSet: ConditionalAccessConditionSet | undefined = {} as ConditionalAccessConditionSet) : void {
        writer.writeObjectValue<ConditionalAccessApplications>("applications", conditionalAccessConditionSet.applications, serializeConditionalAccessApplications);
        writer.writeObjectValue<ConditionalAccessClientApplications>("clientApplications", conditionalAccessConditionSet.clientApplications, serializeConditionalAccessClientApplications);
        if(conditionalAccessConditionSet.clientAppTypes)
        writer.writeEnumValue<ConditionalAccessClientApp>("clientAppTypes", ...conditionalAccessConditionSet.clientAppTypes);
        writer.writeObjectValue<ConditionalAccessDevices>("devices", conditionalAccessConditionSet.devices, serializeConditionalAccessDevices);
        writer.writeObjectValue<ConditionalAccessLocations>("locations", conditionalAccessConditionSet.locations, serializeConditionalAccessLocations);
        writer.writeStringValue("@odata.type", conditionalAccessConditionSet.odataType);
        writer.writeObjectValue<ConditionalAccessPlatforms>("platforms", conditionalAccessConditionSet.platforms, serializeConditionalAccessPlatforms);
        if(conditionalAccessConditionSet.servicePrincipalRiskLevels)
        writer.writeEnumValue<RiskLevel>("servicePrincipalRiskLevels", ...conditionalAccessConditionSet.servicePrincipalRiskLevels);
        if(conditionalAccessConditionSet.signInRiskLevels)
        writer.writeEnumValue<RiskLevel>("signInRiskLevels", ...conditionalAccessConditionSet.signInRiskLevels);
        if(conditionalAccessConditionSet.userRiskLevels)
        writer.writeEnumValue<RiskLevel>("userRiskLevels", ...conditionalAccessConditionSet.userRiskLevels);
        writer.writeObjectValue<ConditionalAccessUsers>("users", conditionalAccessConditionSet.users, serializeConditionalAccessUsers);
        writer.writeAdditionalData(conditionalAccessConditionSet.additionalData);
}
