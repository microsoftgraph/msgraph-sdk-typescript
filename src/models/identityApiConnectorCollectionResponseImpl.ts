import {createIdentityApiConnectorFromDiscriminatorValue} from './createIdentityApiConnectorFromDiscriminatorValue';
import {IdentityApiConnector} from './identityApiConnector';
import {IdentityApiConnectorCollectionResponse} from './identityApiConnectorCollectionResponse';
import {IdentityApiConnectorImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IdentityApiConnectorCollectionResponseImpl implements AdditionalDataHolder, IdentityApiConnectorCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: IdentityApiConnector[] | undefined;
    /**
     * Instantiates a new IdentityApiConnectorCollectionResponse and sets the default values.
     * @param identityApiConnectorCollectionResponseParameterValue 
     */
    public constructor(identityApiConnectorCollectionResponseParameterValue?: IdentityApiConnectorCollectionResponse | undefined) {
        this.additionalData = identityApiConnectorCollectionResponseParameterValue?.additionalData ? identityApiConnectorCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = identityApiConnectorCollectionResponseParameterValue?.nextLink ;
        this.value = identityApiConnectorCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<IdentityApiConnectorImpl>(createIdentityApiConnectorFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: IdentityApiConnectorImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new IdentityApiConnectorImpl(element));});
        writer.writeCollectionOfObjectValues<IdentityApiConnectorImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
