import {B2xIdentityUserFlow} from './b2xIdentityUserFlow';
import {B2xIdentityUserFlowCollectionResponse} from './b2xIdentityUserFlowCollectionResponse';
import {createB2xIdentityUserFlowFromDiscriminatorValue} from './createB2xIdentityUserFlowFromDiscriminatorValue';
import {B2xIdentityUserFlowImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class B2xIdentityUserFlowCollectionResponseImpl implements AdditionalDataHolder, B2xIdentityUserFlowCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: B2xIdentityUserFlow[] | undefined;
    /**
     * Instantiates a new B2xIdentityUserFlowCollectionResponse and sets the default values.
     * @param b2xIdentityUserFlowCollectionResponseParameterValue 
     */
    public constructor(b2xIdentityUserFlowCollectionResponseParameterValue?: B2xIdentityUserFlowCollectionResponse | undefined) {
        this.additionalData = b2xIdentityUserFlowCollectionResponseParameterValue?.additionalData ? b2xIdentityUserFlowCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = b2xIdentityUserFlowCollectionResponseParameterValue?.nextLink ;
        this.value = b2xIdentityUserFlowCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<B2xIdentityUserFlowImpl>(createB2xIdentityUserFlowFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: B2xIdentityUserFlowImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new B2xIdentityUserFlowImpl(element));});
        writer.writeCollectionOfObjectValues<B2xIdentityUserFlowImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
