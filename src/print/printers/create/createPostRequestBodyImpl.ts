import {PrintCertificateSigningRequestImpl} from '../../../models/';
import {createPrintCertificateSigningRequestFromDiscriminatorValue} from '../../../models/createPrintCertificateSigningRequestFromDiscriminatorValue';
import {PrintCertificateSigningRequest} from '../../../models/printCertificateSigningRequest';
import {CreatePostRequestBody} from './createPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the create method. */
export class CreatePostRequestBodyImpl implements AdditionalDataHolder, CreatePostRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The certificateSigningRequest property */
    public certificateSigningRequest?: PrintCertificateSigningRequest | undefined;
    /** The connectorId property */
    public connectorId?: string | undefined;
    /** The displayName property */
    public displayName?: string | undefined;
    /** The hasPhysicalDevice property */
    public hasPhysicalDevice?: boolean | undefined;
    /** The manufacturer property */
    public manufacturer?: string | undefined;
    /** The model property */
    public model?: string | undefined;
    /** The physicalDeviceId property */
    public physicalDeviceId?: string | undefined;
    /**
     * Instantiates a new createPostRequestBody and sets the default values.
     * @param createPostRequestBodyParameterValue 
     */
    public constructor(createPostRequestBodyParameterValue?: CreatePostRequestBody | undefined) {
        this.additionalData = createPostRequestBodyParameterValue?.additionalData ? createPostRequestBodyParameterValue?.additionalData! : {}
        this.certificateSigningRequest = createPostRequestBodyParameterValue?.certificateSigningRequest ;
        this.connectorId = createPostRequestBodyParameterValue?.connectorId ;
        this.displayName = createPostRequestBodyParameterValue?.displayName ;
        this.hasPhysicalDevice = createPostRequestBodyParameterValue?.hasPhysicalDevice ;
        this.manufacturer = createPostRequestBodyParameterValue?.manufacturer ;
        this.model = createPostRequestBodyParameterValue?.model ;
        this.physicalDeviceId = createPostRequestBodyParameterValue?.physicalDeviceId ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "certificateSigningRequest": n => { this.certificateSigningRequest = n.getObjectValue<PrintCertificateSigningRequestImpl>(createPrintCertificateSigningRequestFromDiscriminatorValue); },
            "connectorId": n => { this.connectorId = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "hasPhysicalDevice": n => { this.hasPhysicalDevice = n.getBooleanValue(); },
            "manufacturer": n => { this.manufacturer = n.getStringValue(); },
            "model": n => { this.model = n.getStringValue(); },
            "physicalDeviceId": n => { this.physicalDeviceId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.certificateSigningRequest){
        writer.writeObjectValue<PrintCertificateSigningRequestImpl>("certificateSigningRequest", new PrintCertificateSigningRequestImpl(this.certificateSigningRequest));
        }
        if(this.connectorId){
        writer.writeStringValue("connectorId", this.connectorId);
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.hasPhysicalDevice){
        writer.writeBooleanValue("hasPhysicalDevice", this.hasPhysicalDevice);
        }
        if(this.manufacturer){
        writer.writeStringValue("manufacturer", this.manufacturer);
        }
        if(this.model){
        writer.writeStringValue("model", this.model);
        }
        if(this.physicalDeviceId){
        writer.writeStringValue("physicalDeviceId", this.physicalDeviceId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
