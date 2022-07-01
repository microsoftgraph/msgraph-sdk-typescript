import {Application} from './application';
import {ApplicationServicePrincipal} from './applicationServicePrincipal';
import {createApplicationFromDiscriminatorValue} from './createApplicationFromDiscriminatorValue';
import {createServicePrincipalFromDiscriminatorValue} from './createServicePrincipalFromDiscriminatorValue';
import {ApplicationImpl, ServicePrincipalImpl} from './index';
import {ServicePrincipal} from './servicePrincipal';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ApplicationServicePrincipalImpl implements ApplicationServicePrincipal {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The application property */
    private _application?: Application | undefined;
    /** The servicePrincipal property */
    private _servicePrincipal?: ServicePrincipal | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Gets the application property value. The application property
     * @returns a ApplicationInterface
     */
    public get application() {
        return this._application;
    };
    /**
     * Sets the application property value. The application property
     * @param value Value to set for the application property.
     */
    public set application(value: Application | undefined) {
        if(value) {
            this._application = value instanceof ApplicationImpl? value : new ApplicationImpl(value);
        }
    };
    /**
     * Instantiates a new ApplicationServicePrincipal and sets the default values.
     * @param applicationServicePrincipalParameterValue 
     */
    public constructor(applicationServicePrincipalParameterValue?: ApplicationServicePrincipal | undefined) {
        this._additionalData = applicationServicePrincipalParameterValue?.additionalData ? applicationServicePrincipalParameterValue?.additionalData! : {};
        this._application = applicationServicePrincipalParameterValue?.application;
        this._servicePrincipal = applicationServicePrincipalParameterValue?.servicePrincipal;
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
            writer.writeObjectValue<ApplicationImpl>("application", (!this.application || this.application instanceof ApplicationImpl? this.application : new ApplicationImpl(this.application)));
        }
        if(this.servicePrincipal){
            writer.writeObjectValue<ServicePrincipalImpl>("servicePrincipal", (!this.servicePrincipal || this.servicePrincipal instanceof ServicePrincipalImpl? this.servicePrincipal : new ServicePrincipalImpl(this.servicePrincipal)));
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the servicePrincipal property value. The servicePrincipal property
     * @returns a ServicePrincipalInterface
     */
    public get servicePrincipal() {
        return this._servicePrincipal;
    };
    /**
     * Sets the servicePrincipal property value. The servicePrincipal property
     * @param value Value to set for the servicePrincipal property.
     */
    public set servicePrincipal(value: ServicePrincipal | undefined) {
        if(value) {
            this._servicePrincipal = value instanceof ServicePrincipalImpl? value : new ServicePrincipalImpl(value);
        }
    };
}
