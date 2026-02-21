import { ClassConstructor, plainToClass, plainToInstance } from "class-transformer";
import { validateSync } from "class-validator";

export function validateEnv<T extends object>(config: Record<string, string | undefined>, envVariableClass: ClassConstructor<T>) {
    const validatedConfig = plainToInstance(envVariableClass, config, {
        enableImplicitConversion: true
    })

    const errors = validateSync(validatedConfig, {
        skipMissingProperties: true
    })

    if (errors.length > 0) {
        const errorMsg = errors.map( error => `\nError in ${error.property}:\n` +
            (error.constraints ? Object.entries(error.constraints).map(([key, value]) => `+ ${key}: ${value}`).join('\n') : '')
        ).join('\n')

        console.log(errorMsg)

        throw new Error(errorMsg)
    }
}