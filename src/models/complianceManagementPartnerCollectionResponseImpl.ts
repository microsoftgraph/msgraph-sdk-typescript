import {ComplianceManagementPartner} from './complianceManagementPartner';
import {ComplianceManagementPartnerCollectionResponse} from './complianceManagementPartnerCollectionResponse';
import {createComplianceManagementPartnerFromDiscriminatorValue} from './createComplianceManagementPartnerFromDiscriminatorValue';
import {ComplianceManagementPartnerImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ComplianceManagementPartnerCollectionResponseImpl implements AdditionalDataHolder, ComplianceManagementPartnerCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: ComplianceManagementPartner[] | undefined;
    /**
     * Instantiates a new ComplianceManagementPartnerCollectionResponse and sets the default values.
     * @param complianceManagementPartnerCollectionResponseParameterValue 
     */
    public constructor(complianceManagementPartnerCollectionResponseParameterValue?: ComplianceManagementPartnerCollectionResponse | undefined) {
        this.additionalData = complianceManagementPartnerCollectionResponseParameterValue?.additionalData ? complianceManagementPartnerCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = complianceManagementPartnerCollectionResponseParameterValue?.nextLink ;
        this.value = complianceManagementPartnerCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<ComplianceManagementPartnerImpl>(createComplianceManagementPartnerFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.nextLink){
        writer.writeStringValue("@odata.nextLink", this.nextLink);
        }
        if(this.value && this.value.length != 0){        const valueArrValue: ComplianceManagementPartnerImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new ComplianceManagementPartnerImpl(element));});
        writer.writeCollectionOfObjectValues<ComplianceManagementPartnerImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
