import {createOrgContactFromDiscriminatorValue} from './createOrgContactFromDiscriminatorValue';
import {OrgContactImpl} from './index';
import {OrgContact} from './orgContact';
import {OrgContactCollectionResponse} from './orgContactCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OrgContactCollectionResponseImpl implements AdditionalDataHolder, OrgContactCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: OrgContact[] | undefined;
    /**
     * Instantiates a new OrgContactCollectionResponse and sets the default values.
     * @param orgContactCollectionResponseParameterValue 
     */
    public constructor(orgContactCollectionResponseParameterValue?: OrgContactCollectionResponse | undefined) {
        this.additionalData = orgContactCollectionResponseParameterValue?.additionalData ? orgContactCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = orgContactCollectionResponseParameterValue?.nextLink ;
        this.value = orgContactCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<OrgContactImpl>(createOrgContactFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: OrgContactImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new OrgContactImpl(element));});
        writer.writeCollectionOfObjectValues<OrgContactImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
