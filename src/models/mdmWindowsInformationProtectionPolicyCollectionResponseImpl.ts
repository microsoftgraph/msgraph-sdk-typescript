import {createMdmWindowsInformationProtectionPolicyFromDiscriminatorValue} from './createMdmWindowsInformationProtectionPolicyFromDiscriminatorValue';
import {MdmWindowsInformationProtectionPolicyImpl} from './index';
import {MdmWindowsInformationProtectionPolicy} from './mdmWindowsInformationProtectionPolicy';
import {MdmWindowsInformationProtectionPolicyCollectionResponse} from './mdmWindowsInformationProtectionPolicyCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MdmWindowsInformationProtectionPolicyCollectionResponseImpl implements AdditionalDataHolder, MdmWindowsInformationProtectionPolicyCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: MdmWindowsInformationProtectionPolicy[] | undefined;
    /**
     * Instantiates a new MdmWindowsInformationProtectionPolicyCollectionResponse and sets the default values.
     * @param mdmWindowsInformationProtectionPolicyCollectionResponseParameterValue 
     */
    public constructor(mdmWindowsInformationProtectionPolicyCollectionResponseParameterValue?: MdmWindowsInformationProtectionPolicyCollectionResponse | undefined) {
        this.additionalData = mdmWindowsInformationProtectionPolicyCollectionResponseParameterValue?.additionalData ? mdmWindowsInformationProtectionPolicyCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = mdmWindowsInformationProtectionPolicyCollectionResponseParameterValue?.nextLink ;
        this.value = mdmWindowsInformationProtectionPolicyCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<MdmWindowsInformationProtectionPolicyImpl>(createMdmWindowsInformationProtectionPolicyFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: MdmWindowsInformationProtectionPolicyImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new MdmWindowsInformationProtectionPolicyImpl(element));});
        writer.writeCollectionOfObjectValues<MdmWindowsInformationProtectionPolicyImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
