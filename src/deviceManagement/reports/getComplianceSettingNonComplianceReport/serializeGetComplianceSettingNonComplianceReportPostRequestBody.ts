import {GetComplianceSettingNonComplianceReportPostRequestBody} from './getComplianceSettingNonComplianceReportPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetComplianceSettingNonComplianceReportPostRequestBody(getComplianceSettingNonComplianceReportPostRequestBody: GetComplianceSettingNonComplianceReportPostRequestBody | undefined = {} as GetComplianceSettingNonComplianceReportPostRequestBody, writer: SerializationWriter) : void {
        writer.writeStringValue("filter", getComplianceSettingNonComplianceReportPostRequestBody.filter);
        writer.writeCollectionOfPrimitiveValues<string>("groupBy", getComplianceSettingNonComplianceReportPostRequestBody.groupBy);
        writer.writeStringValue("name", getComplianceSettingNonComplianceReportPostRequestBody.name);
        writer.writeCollectionOfPrimitiveValues<string>("orderBy", getComplianceSettingNonComplianceReportPostRequestBody.orderBy);
        writer.writeStringValue("search", getComplianceSettingNonComplianceReportPostRequestBody.search);
        writer.writeCollectionOfPrimitiveValues<string>("select", getComplianceSettingNonComplianceReportPostRequestBody.select);
        writer.writeStringValue("sessionId", getComplianceSettingNonComplianceReportPostRequestBody.sessionId);
        writer.writeNumberValue("skip", getComplianceSettingNonComplianceReportPostRequestBody.skip);
        writer.writeNumberValue("top", getComplianceSettingNonComplianceReportPostRequestBody.top);
        writer.writeAdditionalData(getComplianceSettingNonComplianceReportPostRequestBody.additionalData);
}
