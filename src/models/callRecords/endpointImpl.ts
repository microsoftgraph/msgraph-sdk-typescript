import {createUserAgentFromDiscriminatorValue} from './createUserAgentFromDiscriminatorValue';
import {Endpoint} from './endpoint';
import {UserAgentImpl} from './index';
import {UserAgent} from './userAgent';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EndpointImpl implements AdditionalDataHolder, Endpoint, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** User-agent reported by this endpoint. */
    public userAgent?: UserAgent | undefined;
    /**
     * Instantiates a new endpoint and sets the default values.
     * @param endpointParameterValue 
     */
    public constructor(endpointParameterValue?: Endpoint | undefined) {
        this.additionalData = endpointParameterValue?.additionalData ? endpointParameterValue?.additionalData! : {}
        this.userAgent = endpointParameterValue?.userAgent ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "userAgent": n => { this.userAgent = n.getObjectValue<UserAgentImpl>(createUserAgentFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.userAgent){
        writer.writeObjectValue<UserAgentImpl>("userAgent", new UserAgentImpl(this.userAgent));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
