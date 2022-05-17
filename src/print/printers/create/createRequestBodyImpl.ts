import {PrintCertificateSigningRequestImpl} from '../../../models/';
import {createPrintCertificateSigningRequestFromDiscriminatorValue} from '../../../models/createPrintCertificateSigningRequestFromDiscriminatorValue';
import {PrintCertificateSigningRequest} from '../../../models/printCertificateSigningRequest';
import {CreateRequestBody} from './createRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the create method. */
export class CreateRequestBodyImpl implements AdditionalDataHolder, CreateRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData: Record<string, unknown>;
    /** The certificateSigningRequest property */
    certificateSigningRequest?: PrintCertificateSigningRequest | undefined;
    /** The connectorId property */
    connectorId?: string | undefined;
    /** The displayName property */
    displayName?: string | undefined;
    /** The hasPhysicalDevice property */
    hasPhysicalDevice?: boolean | undefined;
    /** The manufacturer property */
    manufacturer?: string | undefined;
    /** The model property */
    model?: string | undefined;
    /** The physicalDeviceId property */
    physicalDeviceId?: string | undefined;
    /**
     * Instantiates a new createRequestBody and sets the default values.
     * @param createRequestBodyParameterValue 
     */
    public constructor(createRequestBodyParameterValue?: CreateRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = createRequestBodyParameterValue?.additionalData ? {} : createRequestBodyParameterValue?.additionalData!
        this.certificateSigningRequest = createRequestBodyParameterValue?.certificateSigningRequest ;
        this.connectorId = createRequestBodyParameterValue?.connectorId ;
        this.displayName = createRequestBodyParameterValue?.displayName ;
        this.hasPhysicalDevice = createRequestBodyParameterValue?.hasPhysicalDevice ;
        this.manufacturer = createRequestBodyParameterValue?.manufacturer ;
        this.model = createRequestBodyParameterValue?.model ;
        this.physicalDeviceId = createRequestBodyParameterValue?.physicalDeviceId ;
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
        if(this.certificateSigningRequest)
        writer.writeObjectValue<PrintCertificateSigningRequestImpl>("certificateSigningRequest", new PrintCertificateSigningRequestImpl(this.certificateSigningRequest));
        }
        if(this.connectorId){
        if(this.connectorId)
        writer.writeStringValue("connectorId", this.connectorId);
        }
        if(this.displayName){
        if(this.displayName)
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.hasPhysicalDevice){
        if(this.hasPhysicalDevice)
        writer.writeBooleanValue("hasPhysicalDevice", this.hasPhysicalDevice);
        }
        if(this.manufacturer){
        if(this.manufacturer)
        writer.writeStringValue("manufacturer", this.manufacturer);
        }
        if(this.model){
        if(this.model)
        writer.writeStringValue("model", this.model);
        }
        if(this.physicalDeviceId){
        if(this.physicalDeviceId)
        writer.writeStringValue("physicalDeviceId", this.physicalDeviceId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
