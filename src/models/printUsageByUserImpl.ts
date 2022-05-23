import {PrintUsageImpl} from './index';
import {PrintUsageByUser} from './printUsageByUser';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the reportRoot singleton. */
export class PrintUsageByUserImpl extends PrintUsageImpl implements Parsable, PrintUsageByUser {
    /** The UPN of the user represented by these statistics. */
    public userPrincipalName?: string | undefined;
    /**
     * Instantiates a new printUsageByUser and sets the default values.
     * @param printUsageByUserParameterValue 
     */
    public constructor(printUsageByUserParameterValue?: PrintUsageByUser | undefined) {
        super();
        this.userPrincipalName = printUsageByUserParameterValue?.userPrincipalName ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "userPrincipalName": n => { this.userPrincipalName = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.userPrincipalName){
        writer.writeStringValue("userPrincipalName", this.userPrincipalName);
        }
    };
}
