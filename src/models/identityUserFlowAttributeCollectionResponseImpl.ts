import {createIdentityUserFlowAttributeFromDiscriminatorValue} from './createIdentityUserFlowAttributeFromDiscriminatorValue';
import {IdentityUserFlowAttribute} from './identityUserFlowAttribute';
import {IdentityUserFlowAttributeCollectionResponse} from './identityUserFlowAttributeCollectionResponse';
import {IdentityUserFlowAttributeImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IdentityUserFlowAttributeCollectionResponseImpl implements AdditionalDataHolder, IdentityUserFlowAttributeCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: IdentityUserFlowAttribute[] | undefined;
    /**
     * Instantiates a new IdentityUserFlowAttributeCollectionResponse and sets the default values.
     * @param identityUserFlowAttributeCollectionResponseParameterValue 
     */
    public constructor(identityUserFlowAttributeCollectionResponseParameterValue?: IdentityUserFlowAttributeCollectionResponse | undefined) {
        this.additionalData = identityUserFlowAttributeCollectionResponseParameterValue?.additionalData ? identityUserFlowAttributeCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = identityUserFlowAttributeCollectionResponseParameterValue?.nextLink ;
        this.value = identityUserFlowAttributeCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<IdentityUserFlowAttributeImpl>(createIdentityUserFlowAttributeFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: IdentityUserFlowAttributeImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new IdentityUserFlowAttributeImpl(element));});
        writer.writeCollectionOfObjectValues<IdentityUserFlowAttributeImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
