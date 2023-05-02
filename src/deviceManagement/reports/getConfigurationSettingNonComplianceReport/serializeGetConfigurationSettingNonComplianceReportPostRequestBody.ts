import {GetConfigurationSettingNonComplianceReportPostRequestBody} from './getConfigurationSettingNonComplianceReportPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetConfigurationSettingNonComplianceReportPostRequestBody(writer: SerializationWriter, getConfigurationSettingNonComplianceReportPostRequestBody: GetConfigurationSettingNonComplianceReportPostRequestBody | undefined = {} as GetConfigurationSettingNonComplianceReportPostRequestBody) : void {
        writer.writeStringValue("filter", getConfigurationSettingNonComplianceReportPostRequestBody.filter);
        writer.writeCollectionOfPrimitiveValues<string>("groupBy", getConfigurationSettingNonComplianceReportPostRequestBody.groupBy);
        writer.writeStringValue("name", getConfigurationSettingNonComplianceReportPostRequestBody.name);
        writer.writeCollectionOfPrimitiveValues<string>("orderBy", getConfigurationSettingNonComplianceReportPostRequestBody.orderBy);
        writer.writeStringValue("search", getConfigurationSettingNonComplianceReportPostRequestBody.search);
        writer.writeCollectionOfPrimitiveValues<string>("select", getConfigurationSettingNonComplianceReportPostRequestBody.select);
        writer.writeStringValue("sessionId", getConfigurationSettingNonComplianceReportPostRequestBody.sessionId);
        writer.writeNumberValue("skip", getConfigurationSettingNonComplianceReportPostRequestBody.skip);
        writer.writeNumberValue("top", getConfigurationSettingNonComplianceReportPostRequestBody.top);
        writer.writeAdditionalData(getConfigurationSettingNonComplianceReportPostRequestBody.additionalData);
}
