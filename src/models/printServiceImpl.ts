import {createPrintServiceEndpointFromDiscriminatorValue} from './createPrintServiceEndpointFromDiscriminatorValue';
import {EntityImpl, PrintServiceEndpointImpl} from './index';
import {PrintService} from './printService';
import {PrintServiceEndpoint} from './printServiceEndpoint';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the print singleton. */
export class PrintServiceImpl extends EntityImpl implements PrintService {
    /** Endpoints that can be used to access the service. Read-only. Nullable. */
    private _endpoints?: PrintServiceEndpoint[] | undefined;
    /**
     * Instantiates a new printService and sets the default values.
     * @param printServiceParameterValue 
     */
    public constructor(printServiceParameterValue?: PrintService | undefined) {
        super(printServiceParameterValue);
        this._endpoints = printServiceParameterValue?.endpoints;
    };
    /**
     * Gets the endpoints property value. Endpoints that can be used to access the service. Read-only. Nullable.
     * @returns a PrintServiceEndpointInterface
     */
    public get endpoints() {
        return this._endpoints;
    };
    /**
     * Sets the endpoints property value. Endpoints that can be used to access the service. Read-only. Nullable.
     * @param value Value to set for the endpoints property.
     */
    public set endpoints(value: PrintServiceEndpoint[] | undefined) {
        if(value) {
            const endpointsArrValue: PrintServiceEndpointImpl[] = [];
            this.endpoints?.forEach(element => {
                endpointsArrValue.push((element instanceof PrintServiceEndpointImpl? element:new PrintServiceEndpointImpl(element)));
            });
            this._endpoints = endpointsArrValue;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "endpoints": n => { this.endpoints = n.getCollectionOfObjectValues<PrintServiceEndpointImpl>(createPrintServiceEndpointFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.endpoints && this.endpoints.length != 0){        const endpointsArrValue: PrintServiceEndpointImpl[] = [];
        this.endpoints?.forEach(element => {
            endpointsArrValue.push((element instanceof PrintServiceEndpointImpl? element:new PrintServiceEndpointImpl(element)));
        });
            writer.writeCollectionOfObjectValues<PrintServiceEndpointImpl>("endpoints", endpointsArrValue);
        }
    };
}
