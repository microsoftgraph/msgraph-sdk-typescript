import {Application} from './application';
import {ApplicationServicePrincipal} from './applicationServicePrincipal';
import {createApplicationFromDiscriminatorValue} from './createApplicationFromDiscriminatorValue';
import {createServicePrincipalFromDiscriminatorValue} from './createServicePrincipalFromDiscriminatorValue';
import {ApplicationImpl, ServicePrincipalImpl} from './index';
import {ServicePrincipal} from './servicePrincipal';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ApplicationServicePrincipalImpl implements AdditionalDataHolder, ApplicationServicePrincipal, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The application property */
    public application?: Application | undefined;
    /** The servicePrincipal property */
    public servicePrincipal?: ServicePrincipal | undefined;
    /**
     * Instantiates a new ApplicationServicePrincipal and sets the default values.
     * @param applicationServicePrincipalParameterValue 
     */
    public constructor(applicationServicePrincipalParameterValue?: ApplicationServicePrincipal | undefined) {
        this.additionalData = applicationServicePrincipalParameterValue?.additionalData ? applicationServicePrincipalParameterValue?.additionalData! : {}
        this.application = applicationServicePrincipalParameterValue?.application ;
        this.servicePrincipal = applicationServicePrincipalParameterValue?.servicePrincipal ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "application": n => { this.application = n.getObjectValue<ApplicationImpl>(createApplicationFromDiscriminatorValue); },
            "servicePrincipal": n => { this.servicePrincipal = n.getObjectValue<ServicePrincipalImpl>(createServicePrincipalFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.application){
        writer.writeObjectValue<ApplicationImpl>("application", new ApplicationImpl(this.application));
        }
        if(this.servicePrincipal){
        writer.writeObjectValue<ServicePrincipalImpl>("servicePrincipal", new ServicePrincipalImpl(this.servicePrincipal));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
